const express = require("express");
const fs = require("fs"); // this engine requires the fs module
const app = express();
const morgan = require('morgan')
const cartonesRouter = require("./routes/cartones.js");
const port = 3000;

const session = require("express-session");

let sess = {};
if (process.env.NODE_ENV !== "production") {
  console.log("Loading development environment");
  sess = {
    secret: "keyboard cat",
    cookie: { maxAge: 15 * 60 * 1000 },
    saveUninitialized: false,
    resave: false,
  };
} else {
  console.log("Loading production environment");
  let RedisStore = require("connect-redis")(session);
  const { createClient } = require("redis");
  const config = require("./utils/config");
  // console.log("config", config);
  let redisClient = createClient({
    legacyMode: true,
    url: config.url
  });
  redisClient.connect().catch(console.error);

  sess = {
    store: new RedisStore({ client: redisClient }),
    secret: process.env.COOKIE_SECRET || "keyboard cat",
    cookie: { maxAge: 15 * 60 * 1000 },
    saveUninitialized: false,
    resave: false,
  };
}

const cartones = require("./services/cartones.js");
const utils = require("./utils/utils.js");



app.engine("ntl", (filePath, options, callback) => {
  // define the template engine
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple template engine
    const rendered = content
      .toString()
      .replace("#CARTON#", utils.generateHtmlContent(options))
      .replace("#ID#", options.ID);
      

    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "ntl"); // register the template engine
app.use(express.static("public"));
app.use(express.json());

// Use the session middleware
app.use(session(sess))
app.use(morgan("combined"));

app.get("/", (req, res) => {
  //   res.render("index", { value: "15", message: "Hello there!" });
  let values;
  if (req.session.carton) {
    values = cartones.getCarton(req.session.carton)[0];
  } else {
    const randomCarton = cartones.getRandomInt(4500).toString();
    // console.log("randomCarton", randomCarton);
    req.session.carton = randomCarton.toString();
    values = cartones.getCarton(req.session.carton)[0];
  }


  // console.log("values", values);

  res.render("index", values);
});

app.use("/cartones", cartonesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Insert here other API endpoints

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});

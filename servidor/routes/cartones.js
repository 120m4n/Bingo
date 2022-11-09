const express = require("express");
const router = express.Router();
const cartones = require("../services/cartones.js");


/* Get carton. */
router.get("/random", function (req, res, next) {
    //console.log("get random carton");
    try {
        res.json(cartones.getRandomCarton());
    } catch (err) {
        console.error(`Error while getting carton `, err.message);
        next(err);
    }
});


/* get carton by id. */
router.get("/:id", function (req, res, next) {
    //console.log("get carton by id");
    try {
        res.json(cartones.getCarton(req.params.id));
    } catch (err) {
        console.error(`Error while getting carton `, err.message);
        next(err);
    }
});



module.exports = router;
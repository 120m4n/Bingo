const db = require("../services/db");

const randomItems=[];


// get random int between 1001 and max
function getRandomInt(max) {
    let value = Math.floor(Math.random() * Math.floor(max)) + 1001;
    // store in array to avoid duplicates
    if (randomItems.includes(value)) {
        return getRandomInt(max);
    } else {
        randomItems.push(value);
        return value;
    }

}

// get random carton
function getRandomCarton() {
    const sql = "SELECT * FROM carton_temp WHERE id = ?";
    const params = [getRandomInt(2000).toString()];
    //console.log('params', params);
    return db.query(sql, params);
}

// get carton
function getCarton(id='1001') {
    const sql = "SELECT * FROM carton_temp WHERE id = ?";
    const params = [id];
    return db.query(sql, params);

}

module.exports = {
  getCarton,
  getRandomCarton,
  getRandomInt,
};
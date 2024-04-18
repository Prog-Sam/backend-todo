const express = require(express);
const cors = require(cors);

//Separated route specific codes to help keep server.js clean.
module.exports = function (app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
}
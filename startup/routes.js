const express = require('express');
const cors = require('cors');

const todo = require('../routes/todos');

//Separated route specific codes to help keep server.js clean.
module.exports = function (app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

    //put routes under here
    app.use('/api/todos', todo);
    //put error route here
}
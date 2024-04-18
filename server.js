const express = require('express');
const app = express();

//checking if port environment variable is set, if not, use 3000
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})

module.exports = server;
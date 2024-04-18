const express = require('express');
const app = express();

//insert startup codes
require('./startup/routes')(app);

//checking if port environment variable is set, if not, use 3001
const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})

module.exports = server;
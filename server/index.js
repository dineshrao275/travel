require("dotenv").config();

const express = require('express');
const app = express();
const conn = require("./connection");

const port = process.env.PORT || 3002;
app.listen(port,() => {
    console.log("Server is running at:" + port);
});

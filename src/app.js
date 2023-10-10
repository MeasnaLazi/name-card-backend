require("dotenv").config();
require("./database/DBConnection");

const express = require("express");
const app = express();
const router = require("./routers/Route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", process.env.FRONT_END_URL);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(process.env.END_POINT, router);

const server = app.listen(process.env.PORT, function(req, res) {
    const port = server.address().port;
    console.log("The server is running port: " + port)
});


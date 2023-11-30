require("./configs/DotEnvConfig");
require("./database/DBConnection");

const logger = require('morgan')
const exceptionHandler = require("./exceptions/ExceptionHandler");
const { middlewareJWT } = require("./authentication/MiddleWareJWT");
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/Route");
const mediaRouter = require("./routers/MediaRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewareJWT());
app.use(logger("dev"))
app.use(process.env.END_POINT, router);
app.use("/", mediaRouter);
app.use(exceptionHandler);

const server = app.listen(process.env.PORT, function(req, res) {
    const port = server.address().port;
    console.log("The server is running port: " + port)
});

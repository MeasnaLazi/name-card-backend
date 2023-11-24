require("./configs/DotEnvConfig");
require("./database/DBConnection");

// const { httpCode } = require("./utils/ConstUtil");
// const { expressjwt } = require("express-jwt");
const exceptionHandler = require("./exceptions/ExceptionHandler");
const { middlewareJWT } = require("./authentication/MiddleWareJWT");
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/Route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const createMiddlewareJWT = () => {
//     return expressjwt({ secret: process.env.JWT_SECRET_KEY, algorithms: ["HS256"] })
//             .unless({
//                 path: [
//                     // /\/api\/v1\/account*/,
//                     "/api/v1/account/login"
//                 ],
//             });
// }

// app.use(createMiddlewareJWT());
app.use(middlewareJWT());
app.use(process.env.END_POINT, router);
app.use(exceptionHandler);

const server = app.listen(process.env.PORT, function(req, res) {
    const port = server.address().port;
    console.log("The server is running port: " + port)
});

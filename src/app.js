require("./utils/DotEnvUtil");
require("./database/DBConnection");

const { httpCode } = require("./utils/ConstUtil");
const { expressjwt } = require("express-jwt");
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

const createMiddlewareJWT = () => {
    return expressjwt({ secret: process.env.JWT_SECRET_KEY, algorithms: ["HS256"] })
            .unless({
                path: [
                    // /\/api\/v1\/account*/,
                    "/api/v1/account/login"
                ],
            });
}

app.use(createMiddlewareJWT());

app.use((err, req, res, next) => {
    if (err) {
        if (err.status === httpCode.UNAUTHORIZED) {
            return res.status(err.status)
                        .send({
                            status: err.status,
                            message: err.message,
                        });
        } else {
            return res.status(err.status)
                        .send({
                            status: err.status,
                            message: "Invalid Token request.",
                        });
        }
    }
    next();
});

app.use(process.env.END_POINT, router);

const server = app.listen(process.env.PORT, function(req, res) {
    const port = server.address().port;
    console.log("The server is running port: " + port)
});


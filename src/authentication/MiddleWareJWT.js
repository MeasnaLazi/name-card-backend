const { expressjwt } = require("express-jwt");

const createMiddlewareJWT = () => {
    return expressjwt({ secret: process.env.JWT_SECRET_KEY, algorithms: ["HS256"] })
            .unless({
                path: [
                    // /\/api\/v1\/account*/,
                    "/api/v1/account/login"
                ],
            });
}

module.exports = {
    middlewareJWT: createMiddlewareJWT,
}

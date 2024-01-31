const { expressjwt } = require("express-jwt");

const createMiddlewareJWT = () => {
    return expressjwt({ secret: process.env.JWT_SECRET_KEY, algorithms: ["HS256"] })
            .unless({
                path: [
                    // /\/api\/v1\/account*/,
                    "/api/v1/accounts/login",
                    "/api/v1/accounts/login-refresh-token",
                    /\/image*/,
                ],
            });
}

module.exports = {
    middlewareJWT: createMiddlewareJWT,
}

const jwt = require("jsonwebtoken");

const verifyRequest = (req) => {
    const token = req.headers.authorization;

    return _verifyAuth(token); 
}

const _verifyAuth = (token) => {

    if (!token) {
        return null
    }

    const authorization = token.split(" ")[1];

    if (!authorization) {
        return null;
    }
    
    const decoded = jwt.verify(authorization, process.env.JWT_SECRET_KEY);
    const userId = decoded["user_id"]; 

    if (!userId) {
        return null;
    }

    return {
        userId: userId,
    };
}

module.exports = verifyRequest

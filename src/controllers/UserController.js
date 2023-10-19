const { initializeResponse, setResponseWithData, sendResponse, setInternalError, setUnauthorizedError } = require("../utils/ResponseUtil");
const userService = require("../services/UserService");
const textMessage = require("../translation/ResponseMessage");

const login = (req, res) => {
    const { username, password } = req.body;
    const response = initializeResponse();

    userService.login(username, password)
                .then(token => {
                    console.log(token);
                    setResponseWithData(response, 200, "Login successful!", { token: token });
                })
                .catch(err => {
                    setUnauthorizedError(response, textMessage.INVALID_USER_PASSWORD);
                })
                .finally(() => {
                    sendResponse(res, response)
                })
}

module.exports = {
    login,
}
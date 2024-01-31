const { initializeResponse, setResponseWithData, sendResponse, setInternalError, setUnauthorizedError } = require("../utils/ResponseUtil");
const userService = require("../services/UserService");
const textMessage = require("../translation/ResponseMessage");

const login = (req, res) => {
    const { username, password } = req.body;
    const response = initializeResponse();

    userService.login(username, password)
                .then(dataToken => {
                    setResponseWithData(response, 200, "Login successful!", dataToken);
                })
                .catch(err => {
                    setUnauthorizedError(response, textMessage.INVALID_USER_PASSWORD);
                })
                .finally(() => {
                    sendResponse(res, response)
                })
}

const loginWithRefreshToken = (req, res) => {
    const { refresh_token } = req.body;
    const response = initializeResponse();

    userService.loginWithRefreshToken(refresh_token)
                .then(dataToken => {
                    setResponseWithData(response, 200, "Login successful!", dataToken);
                })
                .catch(err => {
                    setUnauthorizedError(response, textMessage.INVALID_REFRESH_TOKEN);
                })
                .finally(() => {
                    sendResponse(res, response)
                })
}

module.exports = {
    login,
    loginWithRefreshToken
}
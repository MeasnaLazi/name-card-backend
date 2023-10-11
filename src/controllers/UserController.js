const { initializeResponse, setResponseWithData, sendResponse, setInternalError } = require("../utils/ResponseUtil");
const userService = require("../services/UserService");

const login = (req, res) => {
    const { username, password } = req.body;
    const response = initializeResponse();

    userService.login(username, password)
                .then(token => {
                    console.log(token);
                    setResponseWithData(response, 200, "Login successful!", { token: token });
                })
                .catch(err => {
                    console.log(err);
                    setInternalError(response, err)
                })
                .finally(() => {
                    sendResponse(res, response)
                })
}

module.exports = {
    login,
}
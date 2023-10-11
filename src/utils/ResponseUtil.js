const { message, httpCode } = require("./ConstUtil");;

const initializeResponse = (code, message) => {
    const response = { code: code, message: message, data: {} };
    return response;
};

const setResponse = (response, code, message) => {
    response.code = code;
    response.message = message;
}

const setResponseWithData = (response, code, message, data) => {
    response.code = code;
    response.message = message;
    response.data = data;
}

const setInternalError = (response, error) => {
    response.code = httpCode.INTERNAL_ERROR;
    response.message = error;
}

const setNotFoundError = (response, error) => {
    response.code = httpCode.NOT_FOUND;
    response.message = message.NOT_FOUND;
}

const sendResponse = (res, response) => {
    let code = parseInt(response.code);
    res.status(code).json({ message: response.message, data: response.data });
}

module.exports = {
    initializeResponse,
    setResponse,
    setInternalError,
    setNotFoundError,
    sendResponse,
    setResponseWithData,
}

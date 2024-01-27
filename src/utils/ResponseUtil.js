const { message, httpCode } = require("./ConstUtil");;

const initializeResponse = (code, message) => {
    const response = { code: code, error: 0, message: message, data: {} };
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

const setResponseWithDataPage = (response, code, message, data, count, total_page) => {
    setResponseWithData(response, code, message, data)
    response.count = count
    response.total_page = total_page
}

const setInternalError = (response, error) => {
    response.code = httpCode.INTERNAL_ERROR;
    response.message = error;
    response.data = undefined;
    response.error = 1;
}

const setNotFoundError = (response, message) => {
    response.code = httpCode.NOT_FOUND;
    response.message = message;
    response.data = undefined;
    response.error = 1;
}

const setUnauthorizedError = (response, message) => {
    response.code = httpCode.UNAUTHORIZED;
    response.message = message;
    response.data = undefined;
    response.error = 1;
}

const sendResponse = (res, response) => {
    let code = parseInt(response.code);
    delete response.code
    res.status(code).json(response);
}

module.exports = {
    initializeResponse,
    setResponse,
    setInternalError,
    setNotFoundError,
    setUnauthorizedError,
    sendResponse,
    setResponseWithData,
    setResponseWithDataPage
}

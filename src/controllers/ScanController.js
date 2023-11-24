const { initializeResponse, setResponse, sendResponse, setResponseWithData } = require("../utils/ResponseUtil");
const { scanImageWithGoogleAPI } = require("../services/ScanService");

const scanImage = (req, res) => {
    const response = initializeResponse();

    const result = scanImageWithGoogleAPI("");

    
    setResponseWithData(res, 200, "creat call", result);

    sendResponse(res, response);
}

module.exports = {
    scanImage,
}
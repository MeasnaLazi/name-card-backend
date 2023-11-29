const { initializeResponse, setResponse, sendResponse, setInternalError, setResponseWithData } = require("../utils/ResponseUtil");
const nameCardService = require("../services/NameCardService");

const createNameCard = (req, res) => {
    const response = initializeResponse();

    setResponse(res, 200, "creat call");

    sendResponse(res, response);
}

const readNameCard = (req, res) => {
    const response = initializeResponse();

    setResponse(response, 200, "red call");

    console.log()

    sendResponse(res, response);
}

const updateNameCard = (req, res) => {
    const response = initializeResponse();

    setResponse(res, 200, "update call");

    sendResponse(res, response);
}

const deleteNameCard = (req, res) => {
    const response = initializeResponse();

    setResponse(res, 200, "delete call");

    sendResponse(res, response);
}

const readAllNameCard = (req, res) => {

    const response = initializeResponse();

    nameCardService.getAllNameCards()
        .then(cards => {
            setResponseWithData(response, 200, "Retrieve successful!", cards);
        })
        .catch(err => {
            setInternalError(response, err)
        })
        .finally(() => {
            sendResponse(res, response)
        })
}

module.exports = {
    createNameCard,
    readNameCard,
    updateNameCard,
    deleteNameCard,
    readAllNameCard
}


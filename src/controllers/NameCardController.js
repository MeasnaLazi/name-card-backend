const responseUtil = require("../utils/ResponseUtil");
const nameCardService = require("../services/NameCardService");
const verifyRequest = require("../utils/AuthUtil")

const createNameCard = (req, res) => {
    const response = responseUtil.initializeResponse();

    responseUtil.setResponse(res, 200, "creat call");

    responseUtil.sendResponse(res, response);
}

const readNameCard = (req, res) => {
    const response = responseUtil.initializeResponse();

    responseUtil.setResponse(response, 200, "red call");

    responseUtil.sendResponse(res, response);
}

const updateNameCard = (req, res) => {
    const response = responseUtil.initializeResponse();

    responseUtil.setResponse(res, 200, "update call");

    responseUtil.sendResponse(res, response);
}

const deleteNameCard = (req, res) => {
    const response = responseUtil.initializeResponse();

    responseUtil.setResponse(res, 200, "delete call");

    responseUtil.sendResponse(res, response);
}

const readNameCards = async (req, res) => {

    const verify = verifyRequest(req);
    const response = responseUtil.initializeResponse();

    if (!verify) {
        responseUtil.setUnauthorizedError(response, "Invalid Token!")
        responseUtil.sendResponse(res, response)
        return
    }

    const page = req.query.page ? req.query.page : 1
    const search = req.query.search ? req.query.search : ""

    const perPage = process.env.PER_PAGE
    const userId = verify.userId;
    const count = await nameCardService.countNameCard(userId, search);
    const totalPage = Math.ceil(count / perPage)

    nameCardService.getNameCards(verify.userId, page, search)
        .then(cards => {
            responseUtil.setResponseWithDataPage(response, 200, "Retrieve successful!", cards, count, totalPage);
        })
        .catch(err => {
            responseUtil.setInternalError(response, err)
        })
        .finally(() => {
            responseUtil.sendResponse(res, response)
        })
}

module.exports = {
    createNameCard,
    readNameCard,
    updateNameCard,
    deleteNameCard,
    readNameCards
}


const responseUtil = require("../utils/ResponseUtil");
const profileService = require("../services/ProfileService");
const verifyRequest = require("../utils/AuthUtil")

const getProfiles = (req, res) => {

    const verify = verifyRequest(req);
    const response = responseUtil.initializeResponse();

    if (!verify) {
        responseUtil.setUnauthorizedError(response, "Invalid Token!")
        responseUtil.sendResponse(res, response)
        return
    }

    const userId = verify.userId;

    profileService.getProfiles(userId)
        .then(profiles => {
            responseUtil.setResponseWithData(response, 200, "Retrieve successful!", profiles);
        })
        .catch(err => {
            responseUtil.setInternalError(response, err)
        })
        .finally(() => {
            responseUtil.sendResponse(res, response)
        })
}

module.exports = {
    getProfiles,
}
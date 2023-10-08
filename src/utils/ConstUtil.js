const message = {
    NOT_FOUND : "not found",
};

const httpCode = {
    SUCCESS : 200,
    NOT_FOUND : 404,
    INTERNAL_ERROR: 500,
}

const route = {
    HOME : "/",
    NAME_CARD : "/name-card",
    NAME_CARD_ID : "/:name_card_id"
}

module.exports = { message, httpCode, route };
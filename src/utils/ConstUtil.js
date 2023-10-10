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

const mongooseMessage = {
    CONNECTED : "Mongoose connected to port",
    DISCONNECTED : "Mongoose disconnected to port",
    CONNECTION_ERROR :  "Mongoose connection error",
    DISCONNECTED_BY_APP : "Mongoose disconnected by app disconnect"
};

const modelMessage = {
    NAME_CARD : "NameCard",
    NAME_CARDS_COLLECTION : "namecards",
};

module.exports = { message, httpCode, route, mongooseMessage, modelMessage };
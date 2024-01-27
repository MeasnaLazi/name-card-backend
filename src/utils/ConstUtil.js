const message = {
    NOT_FOUND : "not found",
};
const httpCode = {
    SUCCESS : 200,
    NOT_FOUND : 404,
    INTERNAL_ERROR: 500,
    UNAUTHORIZED: 401,
}

const mongooseMessage = {
    CONNECTED : "Mongoose connected to port",
    DISCONNECTED : "Mongoose disconnected to port",
    CONNECTION_ERROR :  "Mongoose connection error",
    DISCONNECTED_BY_APP : "Mongoose disconnected by app disconnect"
};

const schema = {
    NAME_CARD_MODEL : "NameCard",
    NAME_CARDS_COLLECTION : "namecards",
    USER_MODEL : "User",
    USERS_COLLECTION : "users",
    PROFILE_MODEL : "Profile",
    PROFILES_COLLECTION : "profiles",
};

const routeNameCard = {
    HOME : "/",
    ID : "/:name_card_id",
}

const routeAccount = {
    HOME: "/",
    LOGIN: "/login"
}

const routeScan = {
    HOME: "/",
}

const routeMedia = {
    IMAGE: "/image",
}

const routeProfile = {
    ID: "/:id",
}

const route = {
    HOME: "/",
    NAME_CARD: routeNameCard,
    ACCOUNT: routeAccount,
    SCAN: routeScan,
    MEDIA: routeMedia,
    PROFILE: routeProfile,
}

module.exports = { message, httpCode, route, mongooseMessage, schema };
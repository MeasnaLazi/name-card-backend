const { Exeption } = require("./Exeption");

const errorHandler = (err, req, res, next) => {

    if (err instanceof Exeption) {
        res.status(err.code).json(err.toJson());
    } else if (err.code == "credentials_required") {
        res.status(err.status)
            .send({
                status: err.status,
                message: "No authorization token was found",
            });
    } else {
        res.status(500).send(err)
    }
};

module.exports = errorHandler;
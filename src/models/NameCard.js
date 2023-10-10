const mongoose = require("mongoose");
const { modelMessage } = require("../utils/ConstUtil");

const nameCardSchema = mongoose.Schema({
    firstname: { 
        type : String, 
        require: true 
    },
    lastname: String,
    middlename: String,
});

mongoose.model(modelMessage.NAME_CARD, nameCardSchema, modelMessage.NAME_CARDS_COLLECTION);
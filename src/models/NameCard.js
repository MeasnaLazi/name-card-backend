const mongoose = require("mongoose");
const { schema } = require("../utils/ConstUtil");

const nameCardSchema = mongoose.Schema({
    firstname: { 
        type : String, 
        require: true 
    },
    lastname: String,
    middlename: String,
});

mongoose.model(schema.NAME_CARD_MODEL, nameCardSchema, schema.NAME_CARDS_COLLECTION);
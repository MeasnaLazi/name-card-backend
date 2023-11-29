const mongoose = require("mongoose");
const { schema } = require("../utils/ConstUtil");

// TODO: 
// Address: should be an other object?
// Phone: should be an array?
const nameCardSchema = mongoose.Schema({
    firstname: { 
        type : String, 
        require: true 
    },
    lastname: String,
    position: { 
        type : String, 
        require: true 
    },
    phone: {
        type : String, 
        require: true 
    },
    email: { 
        type : String, 
        require: true 
    },
    address: String,
    website: String,
    company: String,
    image: { 
        type : String, 
        require: true 
    },
    back_image: String
});

mongoose.model(schema.NAME_CARD_MODEL, nameCardSchema, schema.NAME_CARDS_COLLECTION);
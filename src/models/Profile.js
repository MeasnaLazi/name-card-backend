const mongoose = require("mongoose");
const { schema } = require("../utils/ConstUtil");

const profileSchema = mongoose.Schema({
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
    back_image: String,
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

mongoose.model(schema.PROFILE_MODEL, profileSchema, schema.PROFILES_COLLECTION);
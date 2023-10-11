const mongoose = require("mongoose");
const { schema } = require("../utils/ConstUtil");

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true
    }
})

mongoose.model(schema.USER_MODEL, userSchema, schema.USERS_COLLECTION)
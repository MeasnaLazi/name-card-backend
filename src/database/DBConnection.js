const mongoose = require("mongoose");
const { mongooseMessage } = require("../utils/ConstUtil");

require("../models/NameCard");

console.log("process.env.DB_URL: " + process.env.DB_URL);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", function() {
    console.log(mongooseMessage.CONNECTED + " : " + process.env.PORT);
});

mongoose.connection.on("disconnected", function() {
    console.log(mongooseMessage.DISCONNECTED + " : " + process.env.PORT);
});

mongoose.connection.on("error", function(err) {
    console.log(mongooseMessage.CONNECTION_ERROR + " : " + err);
});

process.on("SIGINT", function() {
    mongoose.connection.close(function(){
        console.log(mongooseMessage.DISCONNECTED_BY_APP + " : " + process.env.PORT)
        process.exit(0);
    })
});
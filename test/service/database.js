const mongoose= require("mongoose");
const dotEnv= require("dotenv");
dotEnv.config({path : `.env.test`});

const openDatabase= () => {
    require("../../src/database/DBConnection");
    mongoose.connection.on("connected", function() {
        console.log("Open database connection.");
    });
}

const closeDatabase= () => {
    mongoose.connection.db.dropDatabase().then(() => {
        mongoose.connection.close();
        console.log("Close database connection and remove all data.");
    })
}

module.exports= {
    openDatabase,
    closeDatabase
}
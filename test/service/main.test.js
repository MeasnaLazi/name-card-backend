const { openDatabase, closeDatabase }= require("./database");

describe("[Unit Test For Services]", async () => {

    before(() => { 
        openDatabase();
    });
    
    require("./user_service.test")

    after(() => {
        closeDatabase();
    })
});
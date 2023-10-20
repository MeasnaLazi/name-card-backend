const { expect }= require("chai");

let userService;

describe("[UserService]", async () => {

    before(() => { 
            userService = require("../../src/services/UserService");
        });
    
    it("Create new user", () => {
        userService
            .createUser("test@test.com", "test", "test123!")
            .then(data => {
                expect(data).to.be.not.equal(null);
            });
    });

    it("Check if user exist", () => {
        userService
            .isUserExist()
            .then(isExist => {
                expect(isExist).to.be.equal(true);
            });
    });

    // after(() => {
    //     closeDatabase();
    // })
});
const { expect }= require("chai");

let userService;
let USER= {
    email: "test@test.com",
    username: "test",
    password: "test123!",
    invalid_password: "wrongPassword",
}

describe("[UserService]", async () => {

    before(() => { 
        userService = require("../../src/services/UserService");
    });
    
    it("Create new user that expect to return that user", (done) => {
        userService
            .createUser(USER.email, USER.username, USER.password)
            .then(data => {
                expect(data).to.be.not.equal(null);
                done()
            })
            .catch(done);
    });

    it("Check if user exist in database, expect to return true", (done) => {
        userService
            .isUserExist()
            .then(isExist => {
                expect(isExist).to.be.equal(true);
                done();
            })
            .catch(done);
    });

    it("Login successful, expect to return that user", (done) => {
        userService
            .login(USER.username, USER.password)
            .then(user => {
                expect(user).to.be.not.equal(null);
                done();
            })
            .catch(done);
    });

    it("Login unsuccessful, expect to throw error", () => {
        return userService
            .login(USER.username, USER.invalid_password)
            .then(user => {
                expect(user).to.be.equal(null);
            })
            .catch(err => {
                expect(err).to.be.not.equal(null);
            });
    });
});
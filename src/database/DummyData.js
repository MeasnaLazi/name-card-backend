const userService = require("../services/UserService");

const initDummyData = () => {
    userService.isUserExist()
        .then(exist => {
            if (!exist) {
                _createFirstUser();
            }
        })
        .catch(err => console.log("error: " + err));
}

const _createFirstUser = () => {
    userService.createUser("measna@lazi.com", "lazi", "12345678")
                .then(user => console.log("First User Create Successful!"))
                .catch(err => console.log("Create User: " + err));
}

module.exports = { 
    initDummyData 
};


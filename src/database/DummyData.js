const userService = require("../services/UserService");
const nameCardService = require("../services/NameCardService");

const checkIfNoUserThenInitUser = () => {
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
                .then(user => {
                    console.log("First User Create Successful!")
                    checkIfCreateSampleNameCards(user)
                })
                .catch(err => console.log("Create User: " + err));
}

const checkIfCreateSampleNameCards = (user) => {
    nameCardService.isNameCardExist()
        .then(exist => {
            if (!exist) {
                _createNameCards(user);
            }
        })
        .catch(err => console.log("error: " + err));
}

const _createNameCards = (user) => {
    let nameCards = [
        {
            firstname: "Sovannmeasna",
            lastname: "Ly",
            position: "IT Manager",
            phone: "+85577498555",
            email: "sovannmeasna.ly@spacianet.com",
            address: "8F Amass Tower, BKK1, Phnom Penh",
            website: "https://spacianet.com.kh",
            company: "SpaciaNet",
            image: "sample.jpg",
            owner: user,
        },
        {
            firstname: "Mariana",
            lastname: "Anderson",
            position: "Marketing Manager",
            phone: "+1234567890",
            email: "hello@reallygreatsite.com",
            address: "123 Anywhere St., Any City",
            website: "www.reallygreatsite.com",
            image: "sample1.jpg",
            owner: user,
        },
        {
            firstname: "DANI",
            lastname: "MARTINES",
            position: "FINANCE MANAGER",
            phone: "+1234567890",
            email: "hello@reallygreatsite.com",
            address: "123 Anywhere St., Any City",
            website: "www.reallygreatsite.com",
            image: "sample2.jpg",
            owner: user,
        }
    ]
    nameCardService.createNameCards(nameCards)
                .then(cards => console.log("Dummy Name Card create successful!"))
                .catch(err => console.log("Dummy Name Card create: " + err));
}

const initDummyData = () => {
    checkIfNoUserThenInitUser();
}

module.exports = { 
    initDummyData 
};


const { schema } = require("../utils/ConstUtil");
const mongoose = require("mongoose")
const NameCard = mongoose.model(schema.NAME_CARD_MODEL);

const createNameCard = (firstname, lastname, position, phone, email, address, website, company, image, back_image) => {
    let data = {
        firstname: firstname,
        lastname: lastname,
        position: position,
        phone: phone,
        email: email,
        address: address,
        website: website,
        company: company,
        image: image,
        back_image: back_image,
    }

    return NameCard.create(data)
        .then(nameCard => Promise.resolve(nameCard))
        .catch((error) => Promise.reject(error));
};

const createNameCards = (nameCards) => {
    return NameCard.create(nameCards)
        .then(nameCards => Promise.resolve(nameCards))
        .catch((error) => Promise.reject(error));
};

const isNameCardExist = () => {
    return NameCard.findOne()
            .then(nameCard => Promise.resolve(nameCard != null))
            .catch((error) => Promise.reject(error));
}

const getAllNameCards = () => {
    return NameCard.find()
            .then(nameCards => Promise.resolve(nameCards))
            .catch((error) => Promise.reject(error));

}

module.exports = {
    createNameCard,
    isNameCardExist,
    createNameCards,
    getAllNameCards
}
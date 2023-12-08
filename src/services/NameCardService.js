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

const getNameCards = (userId, page, search) => {

    const perPage = process.env.PER_PAGE
    const skip = (perPage * page) - perPage

    const filter = { 
        owner: userId 
    }

    if (search != "") {
        const searchQuery = _createSearchQuery(search)
        filter['$or'] = searchQuery
    }

    return NameCard.find(filter)
            .skip(skip)
            .limit(perPage)
            .then(nameCards => Promise.resolve(nameCards))
            .catch((error) => Promise.reject(error));
}

const countNameCard = (userId, search) => {

    const filter = { 
        owner: userId 
    }

    if (search != "") {
        const searchQuery = _createSearchQuery(search)
        filter['$or'] = searchQuery
    }

    return NameCard.count(filter)
}

const _createSearchQuery = (search) => {
    const searchRegex = ".*" + search + "*."
    return [
            { 
                firstname: { 
                    $regex: searchRegex,
                    $options:'i' 
                },
            },
            {   lastname: { 
                    $regex: searchRegex,
                    $options:'i'
                },
            },
            {   
                position: { 
                    $regex: searchRegex,
                    $options:'i'
                },
            },
            {
                phone: { 
                    $regex: searchRegex,
                    $options:'i'
                },
            },
            {
                email: { 
                    $regex: searchRegex,
                    $options:'i'
                },
            },
        ]
}

module.exports = {
    createNameCard,
    isNameCardExist,
    createNameCards,
    getNameCards,
    countNameCard
}
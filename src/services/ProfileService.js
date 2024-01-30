const { schema } = require("../utils/ConstUtil");
const mongoose = require("mongoose")
const Profile = mongoose.model(schema.PROFILE_MODEL);

const createProfiles = (profiles) => {
    return Profile.create(profiles)
        .then(profiles => Promise.resolve(profiles))
        .catch((error) => Promise.reject(error));
};

const getProfiles = (userId) => {

    const filter = { 
        owner: userId 
    }

    return Profile.find(filter)
            .then(profiles => Promise.resolve(profiles))
            .catch((error) => Promise.reject(error));
}

module.exports = {
    createProfiles,
    getProfiles,
}
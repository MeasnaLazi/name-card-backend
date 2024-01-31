const { schema } = require("../utils/ConstUtil");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const User = mongoose.model(schema.USER_MODEL);
const util = require("util");

const createUser = (email, username, password) => {
    let saltNumber = parseInt(process.env.JWT_SALT_NUMBER);
    return bcrypt.genSalt(saltNumber)
        .then((salt) => _generatePassword(password, salt))
        .then((hash) => _createUser(email, username, hash))
        .then((newUser) => Promise.resolve(newUser))
        .catch((error) => Promise.reject(error));
};

const isUserExist = () => {
    return User.findOne()
            .then(user => Promise.resolve(user != null))
            .catch((error) => Promise.reject(error));
}

const login = (username, password) => {
    return User.findOne({ username: username })
                .then(user => _checkUserExists(user))
                .then(user => _verifyPassword(password, user))
                .then(user => _generateRefreshToken(user))
                .then(user => _updateRefreshToken(user))
                .then(user => _generateToken(user) )
                .then(dataToken =>  Promise.resolve(dataToken))
                .catch(err => Promise.reject(err));
}

const loginWithRefreshToken = (refreshToken) => {
    return User.findOne({ refresh_token: refreshToken })
                .then(user => _checkUserExists(user))
                .then(user => _generateRefreshToken(user))
                .then(user => _updateRefreshToken(user))
                .then(user => _generateToken(user) )
                .then(dataToken =>  Promise.resolve(dataToken))
                .catch(err => Promise.reject(err));
}

const _generatePassword = (password, salt) => {
    return bcrypt.hash(password, salt);
}

const _createUser = (email, username, hash) => {
    let data = {
        email: email,
        username: username,
        password: hash
    }

    return User.create(data);
}

const _checkUserExists = (user) => {
    return new Promise((resolve, reject) => {
        if (!user) {
            reject("User not found!");
            return;
        }

        resolve(user);
    });
}

const _verifyPassword = (password, user) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) { 
                    resolve(user);
                } else {
                    reject("Password invalid!");
                }
            })
            .catch(err => reject(err));
    });
}

const _generateToken = async (user) => {

    const secretKey = process.env.JWT_SECRET_KEY;
    const expiresIn = process.env.JWT_TOKEN_EXPIRES;
    const jwtSign = util.promisify(jwt.sign);
    const token = await jwtSign({ user_id: user._id }, secretKey, { expiresIn: expiresIn });

    return { refresh_token: user.refresh_token, token: token }
}

const _generateRefreshToken =(user) => {
    return new Promise(async (resolve, reject) => {
        const refreshKey = process.env.JWT_REFREST_KEY;
        const jwtSign = util.promisify(jwt.sign);
        const refreshToken = await jwtSign({ user_id: user._id }, refreshKey);
        user.refresh_token = refreshToken

        resolve(user)
    })
}

const _updateRefreshToken = async (user) => {
    await User.updateOne({ _id: user._id }, {
        $set: {
            refresh_token: user.refresh_token
        }
    })

    return user
}

module.exports = {
    createUser,
    isUserExist,
    login,
    loginWithRefreshToken,
}
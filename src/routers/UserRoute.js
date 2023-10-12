const express = require("express");
const userController = require("../controllers/UserController");
const { route } = require("../utils/ConstUtil");

const router = express.Router();

router.route(route.ACCOUNT.LOGIN)
    .put(userController.login)
    
module.exports = router;


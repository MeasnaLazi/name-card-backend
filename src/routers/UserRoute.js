const express = require("express");
const userController = require("../controllers/UserController");
const { route } = require("../utils/ConstUtil");

const router = express.Router();

router.route(route.ACCOUNT.LOGIN)
    .put(userController.login)
router.route(route.ACCOUNT.LOGIN_REFRESH_TOKEN)
    .put(userController.loginWithRefreshToken)
    
module.exports = router;


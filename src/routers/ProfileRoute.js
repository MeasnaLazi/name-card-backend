const express = require("express");
const profileController = require("../controllers/ProfileController");
// const nameCardController = require("../controllers/NameCardController");
const { route } = require("../utils/ConstUtil");

const router = express.Router();

router.route(route.HOME)
    .get(profileController.getProfiles)
    
module.exports = router;


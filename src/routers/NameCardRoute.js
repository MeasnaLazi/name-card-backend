const express = require("express");
const nameCardController = require("../controllers/NameCardController");
const { route } = require("../utils/ConstUtil");

const router = express.Router();

router.route(route.NAME_CARD_ID)
    .get(nameCardController.readNameCard)
    .patch(nameCardController.updateNameCard)
    .put(nameCardController.updateNameCard)
    .delete(nameCardController.deleteNameCard)

router.route(route.HOME)
    .post(nameCardController.createNameCard)
    
module.exports = router;


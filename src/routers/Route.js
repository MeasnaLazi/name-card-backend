const { route } = require("../utils/ConstUtil");
const express = require("express");
const router = express.Router();

const nameCardRoute = require("./NameCardRoute");
const accountRoute = require("./UserRoute");

router.use(route.NAME_CARD, nameCardRoute);
router.use(route.ACCOUNT, accountRoute);

module.exports = router;
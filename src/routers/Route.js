const { route } = require("../utils/ConstUtil");
const express = require("express");
const router = express.Router();

const nameCardRoute = require("./NameCardRoute");

router.use(route.NAME_CARD, nameCardRoute);

module.exports = router;
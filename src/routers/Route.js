const { route } = require("../utils/ConstUtil");
const express = require("express");
const router = express.Router();

const nameCardRoute = require("./NameCardRoute");
const accountRoute = require("./UserRoute");
const scanRoute = require("./ScanRoute");

router.use(route.NAME_CARD.NAME, nameCardRoute);
router.use(route.ACCOUNT.NAME, accountRoute);
router.use(route.SCAN.NAME, scanRoute);

module.exports = router;
const express = require("express");
const router = express.Router();

const nameCardRoute = require("./NameCardRoute");
const accountRoute = require("./UserRoute");
const scanRoute = require("./ScanRoute");

router.use("/name-cards", nameCardRoute);
router.use("/accounts", accountRoute);
router.use("/scan", scanRoute);

module.exports = router;
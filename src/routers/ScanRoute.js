const express = require("express");
const scanController = require("../controllers/ScanController");
const { route } = require("../utils/ConstUtil");
const { jpgAndPngOnly } = require("../utils/FileUtil");

const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: process.env.UPLOAD_FOLDER_PATH, fileFilter: jpgAndPngOnly });

router.route(route.HOME)
    .post(scanController.scanImage)
    
module.exports = router;


const express = require("express");
const mediaController = require("../controllers/MediaContoller");
const { route } = require("../utils/ConstUtil");

const router = express.Router();

router.route(route.MEDIA.IMAGE + "/:filename")
    .get(mediaController.getImage)
    
module.exports = router;


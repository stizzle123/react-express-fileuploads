const express = require("express");
const imageController = require("../controller/image");
const router = express.Router();

router.post("/upload", imageController.upload);
router.get("/view", imageController.view);

module.exports = router;

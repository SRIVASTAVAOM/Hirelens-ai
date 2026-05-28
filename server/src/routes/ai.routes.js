const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const upload = require("../config/multer");

const {
  parseResume
} = require("../controllers/ai.controller");

router.post(
  "/parse-resume",
  authMiddleware,
  upload.single("resume"),
  parseResume
);

module.exports = router;
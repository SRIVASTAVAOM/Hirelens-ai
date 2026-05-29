const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const upload = require("../config/multer");

const optionalAuth =
require("../middleware/optionalAuth.middleware");

const {

  parseResume,

  getAnalysisHistory,

  deleteAnalysis

} = require(
  "../controllers/ai.controller"
);

router.delete(

  "/history/:id",

  deleteAnalysis

);


router.post(

  "/parse-resume",

  optionalAuth,

  upload.single("resume"),

  parseResume

);

router.get(

  "/history",

  authMiddleware,

  getAnalysisHistory

);

module.exports = router;

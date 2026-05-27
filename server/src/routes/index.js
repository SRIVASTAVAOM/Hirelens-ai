const express = require("express");

const authRoutes = require("./auth.routes");

const router = express.Router();

const resumeRoutes = require("./resume.routes");

router.use("/auth", authRoutes);
router.use("/resume", resumeRoutes);

router.get("/", (req, res) => {
  res.json({
    message: "API Working"
  });
});

module.exports = router;
const express = require("express");

const authRoutes = require("./auth.routes");

const router = express.Router();

const resumeRoutes = require("./resume.routes");

const aiRoutes = require("./ai.routes");

router.use("/auth", authRoutes);
router.use("/resume", resumeRoutes);
router.use("/ai", aiRoutes);

router.get("/", (req, res) => {
  res.json({
    message: "API Working"
  });
});

module.exports = router;
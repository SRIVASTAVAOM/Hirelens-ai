const express = require("express");

const authRoutes = require("./auth.routes");

const router = express.Router();

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.json({
    message: "API Working"
  });
});

module.exports = router;
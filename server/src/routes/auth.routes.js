const express = require("express");

const {
  register
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);

router.get("/test", (req, res) => {
  res.json({
    message: "Auth route working"
  });
});

module.exports = router;
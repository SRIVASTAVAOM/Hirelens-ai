const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const {
  register,
  login,
  getProfile
} = require("../controllers/auth.controller");

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/test", (req, res) => {
  res.json({
    message: "Auth route working"
  });
});
router.get(
  "/profile",
  authMiddleware,
  getProfile
);


module.exports = router;


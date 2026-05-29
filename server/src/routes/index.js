const express =
require("express");

const router =
express.Router();

const authRoutes =
require("./auth.routes");

const aiRoutes =
require("./ai.routes");

const chatRoutes =
require("./chat.routes");

router.use(
  "/auth",
  authRoutes
);

router.use(
  "/ai",
  aiRoutes
);

router.use(
  "/chat",
  chatRoutes
);

module.exports =
router;
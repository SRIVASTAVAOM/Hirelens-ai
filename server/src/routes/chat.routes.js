const express =
require("express");

const router =
express.Router();

const {

  chatWithAI,

  deleteChats

} = require(
  "../controllers/chat.controller"
);

router.post(

  "/",

  chatWithAI

);

router.delete(

  "/",

  deleteChats

);

module.exports = router;
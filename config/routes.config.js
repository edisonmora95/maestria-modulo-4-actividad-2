const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post.controller.js");

router.post("/posts", PostController.addOne);
router.get("/posts", PostController.findAll);

module.exports = router;
const express = require("express");
const router = express.Router();

const PostMiddleware = require("../middlewares/post.middleware");
const PostController = require("../controllers/post.controller.js");

router.post("/posts", PostMiddleware.validateAddOne, PostController.addOne);
router.get("/posts", PostController.findAll);

module.exports = router;
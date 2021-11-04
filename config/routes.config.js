const express = require("express");
const router = express.Router();

const PostMiddleware = require("../middlewares/post.middleware");
const PostController = require("../controllers/post.controller.js");

const UserMiddleware = require("../middlewares/user.middleware");
const UserController = require("../controllers/user.controller");

router.post("/posts", PostMiddleware.validateAddOne, PostController.addOne);
router.get("/posts", PostController.findAll);
router.get("/posts/:id", PostController.findOne);
router.patch("/posts/:id", PostController.updateOne);
router.delete("/posts/:id", PostController.deleteOne);

router.post("/users", UserController.addOne);
router.post("/login", UserMiddleware.validateLogin, UserController.login);

module.exports = router;
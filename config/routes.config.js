const express = require("express");
const router = express.Router();

const AuthMiddleware = require("../middlewares/auth.middleware");

const PostMiddleware = require("../middlewares/post.middleware");
const PostController = require("../controllers/post.controller.js");

const UserMiddleware = require("../middlewares/user.middleware");
const UserController = require("../controllers/user.controller");

router.post("/posts", AuthMiddleware.authenticate, PostMiddleware.validateAddOne, PostController.addOne);
router.get("/posts", AuthMiddleware.authenticate, PostController.findAll);
router.get("/posts/:id", AuthMiddleware.authenticate, PostController.findOne);
router.patch("/posts/:id", AuthMiddleware.authenticate, PostController.updateOne);
router.delete("/posts/:id", AuthMiddleware.authenticate, PostController.deleteOne);

router.post("/users", UserController.addOne);
router.post("/login", UserMiddleware.validateLogin, UserController.login);
router.post("/logout", AuthMiddleware.authenticate, UserController.logout);
router.get("/users/:id/activate", UserController.activate);

module.exports = router;
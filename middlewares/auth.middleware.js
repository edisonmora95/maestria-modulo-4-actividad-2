const { Request, Response, NextFunction } = require("express");

const UserService = require("../services/user.service");

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const authenticate = async (req, res, next) => {
  const { session: { userId } } = req;

  if (!userId) {
    return next({ status: 401, message: "Not authenticated" });
  }

  const user = await UserService.findById(userId);
  if (!user) {
    return next({ status: 401, message: "Not authenticated" });
  }

  req.User = user;
  return next();
};

module.exports = {
  authenticate,
};

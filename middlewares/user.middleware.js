const { Request, Response, NextFunction } = require("express");

const Validator = require("../validators");
const UserSchema = require("../validators/schemas/user");

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const validateLogin = (req, res, next) => {
  try {
    const { isValid, message } = Validator.validate(req.body, UserSchema.LoginSchema);

    if (isValid) {
      return next();
    }

    return res.status(400).send({
      message,
      code: "bad_request",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

module.exports = {
  validateLogin,
};

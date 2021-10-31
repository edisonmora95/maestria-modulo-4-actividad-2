const { Request, Response, NextFunction } = require("express");

const Validator = require("../validators");
const PostSchemas = require("../validators/schemas/post");

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const validateAddOne = (req, res, next) => {
  try {
    const { isValid, message } = Validator.validate(req.body, PostSchemas.AddOneSchema);

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
  validateAddOne,
};

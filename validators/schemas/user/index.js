const Joi = require("joi");

const LoginSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  LoginSchema,
};
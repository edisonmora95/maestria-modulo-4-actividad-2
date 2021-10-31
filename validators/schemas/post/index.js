const Joi = require("joi");

const AddOneSchema = Joi.object().keys({
  title: Joi.string().required(),
  text: Joi.string().required(),
  author: Joi.string().required(),
});

module.exports = {
  AddOneSchema,
};
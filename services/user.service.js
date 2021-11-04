const UserModel = require("../models/user.model");

const addOne = async (data) => {
  const result = await UserModel.create(data);
  return result;
};

const findByEmail = async (email) => {
  const query = { email };
  const result = await UserModel.findOne(query);
  return result ? result.toObject() : null;
};

module.exports = {
  addOne,
  findByEmail,
};

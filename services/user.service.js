const UserModel = require("../models/user.model");

const addOne = async (data) => {
  const result = await UserModel.create(data);
  return result;
};

module.exports = {
  addOne,
};

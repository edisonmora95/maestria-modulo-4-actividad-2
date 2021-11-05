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

const findById = async (_id) => {
  const query = { _id };
  const result = await UserModel.findOne(query);
  return result ? result.toObject() : null;
};

const activate = async (_id) => {
  const query = { _id };
  const update = {
    $set: {
      active: true,
    },
  };
  const result = await UserModel.updateOne(query, update);
  return result;
};


module.exports = {
  addOne,
  findByEmail,
  findById,
  activate,
};

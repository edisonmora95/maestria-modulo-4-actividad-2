const PostModel = require("../models/post.model");

const findAll = async () => {
  const result = await PostModel.find();
  return result;
};

const addOne = async (data) => {
  const result = await PostModel.create(data);
  return result;
};

module.exports = {
  findAll,
  addOne,
};

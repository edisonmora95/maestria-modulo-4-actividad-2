const PostModel = require("../models/post.model");

const findAll = async () => {
  const result = await PostModel.find();
  return result;
};

const addOne = async (data) => {
  const result = await PostModel.create(data);
  return result;
};

/**
 * @param {string} id
 */
const findOne = async (id) => {
  const query = {
    _id: id,
  };
  const result = await PostModel.findOne(query);
  return result;
};

/**
 * @param {string} id
 */
const updateOne = async (id, data) => {
  const query = {
    _id: id,
  };
  const update = {
    $set: data,
  };
  const options = {
    lean: true,
    new: true,
  };
  const result = await PostModel.findOneAndUpdate(query, update, options);
  return result;
};

/**
 * @param {string} id
 */
const deleteOne = async (id) => {
  const query = {
    _id: id,
  };
  const result = await PostModel.deleteOne(query);
  return result;
};

module.exports = {
  findAll,
  addOne,
  findOne,
  updateOne,
  deleteOne,
};

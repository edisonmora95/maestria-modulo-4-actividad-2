const { Request, Response } = require("express");

const PostService = require("../services/post.service");

/**
 * @param {Request} req
 * @param {Response} res
 */
const addOne = async (req, res) => {
  try {
    const {
      title,
      text,
      author,
    } = req.body;

    const result = await PostService.addOne({
      title,
      text,
      author,
    });

    return res.status(201).json({
      message: "Post created successfully",
      data: result,
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error,
      message: "Internal Server Error",
    });
  }
};

/**
 * @param {Request} req
 * @param {Response} res
 */
 const findAll = async (req, res) => {
  try {
    const result = await PostService.findAll();

    return res.status(201).json({
      message: "Posts retrieved successfully",
      result,
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addOne,
  findAll,
};

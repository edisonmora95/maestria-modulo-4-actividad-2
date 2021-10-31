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
    });
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

    return res.status(200).json({
      message: "Posts retrieved successfully",
      data: result,
      count: result.length,
    });
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
const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PostService.findOne(id);

    if (!result) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    return res.status(200).json({
      message: "Post retrieved successfully",
      data: result,
    });
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
const updateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      text,
      author,
    } = req.body;

    const oldPost = await PostService.findOne(id);

    if (!oldPost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const result = await PostService.updateOne(id, {
      title,
      text,
      author,
    });

    return res.status(200).json({
      message: "Post updated successfully",
      data: result,
    });
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
  findOne,
  updateOne,
};

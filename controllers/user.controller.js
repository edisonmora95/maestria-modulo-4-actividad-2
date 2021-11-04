const { Request, Response } = require("express");

const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");

/**
 * @param {Request} req
 * @param {Response} res
 */
 const addOne = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      bio,
    } = req.body;

    const hashPassword = AuthService.hashPassword(password);

    const result = await UserService.addOne({
      name,
      email,
      password: hashPassword,
      bio,
    });

    return res.status(201).json({
      message: "User created successfully",
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
};


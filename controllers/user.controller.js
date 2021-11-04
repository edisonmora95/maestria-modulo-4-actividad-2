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

/**
 * @param {Request} req
 * @param {Response} res
 */
const login = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const user = await UserService.findByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const validPassword = AuthService.comparePasswords(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    req.session.userId = user._id;
    const data = {
      ...user,
    };
    delete data.password;

    return res.status(201).json({
      message: "User logged successfully",
      data,
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
 const logout = async (req, res) => {
  try {
    req.session.destroy();

    return res.status(204).send();
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
  login,
  logout,
};


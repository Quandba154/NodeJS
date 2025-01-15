const express = require("express");
const { User } = require("../models");
const userRouter = express.Router();

const {
  register,
  login,
  upload_avatar,
} = require("../controllers/user.controllers");

const { checkExist } = require("../middlewares/validations/checkExist");
const { where } = require("sequelize");

userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.post("/upload-avatar", upload_avatar);

module.exports = {
  userRouter,
};

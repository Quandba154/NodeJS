const express = require("express");
const { User } = require("../models");
const userRouter = express.Router();

const { register, login } = require("../controllers/user.controllers");

const { checkExist } = require("../middlewares/validations/checkExist");
const { where } = require("sequelize");



userRouter.post("/register", register);

userRouter.post("/login", login);


// userRouter.put("/:id", checkExist(Station), updateStationById);

// userRouter.delete("/:id", checkExist(Station), deleteStationById);

// stationRouter.get("/", filterStation);

module.exports = {
  userRouter,
};

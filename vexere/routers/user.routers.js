const express = require("express");
const { User } = require("../models");
const userRouter = express.Router();

const { register } = require("../controllers/user.controllers");

const { checkExist } = require("../middlewares/validations/checkExist");
const { where } = require("sequelize");

// stationRouter.get("/getAll", getAllStation);

// stationRouter.get("/:id", getStationById);

userRouter.post("/register", register);

// userRouter.put("/:id", checkExist(Station), updateStationById);

// userRouter.delete("/:id", checkExist(Station), deleteStationById);

// stationRouter.get("/", filterStation);

module.exports = {
  userRouter,
};

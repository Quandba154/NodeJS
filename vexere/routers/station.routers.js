const express = require("express");
const { Station } = require("../models");
const stationRouter = express.Router();
const {
  createStation,
  getAllStation,
  getStationById,
  updateStationById,
  deleteStationById,
  filterStation,
} = require("../controllers/station.controllers");

const { checkExist } = require("../middlewares/validations/checkExist");
const { where } = require("sequelize");
const { userRouter } = require("./user.routers");

stationRouter.get("/getAll", getAllStation);

stationRouter.get("/:id", getStationById);

stationRouter.post("/", createStation);

stationRouter.put("/:id", checkExist(Station), updateStationById);

stationRouter.delete("/:id", checkExist(Station), deleteStationById);

stationRouter.get("/", filterStation);

module.exports = {
  stationRouter,
  userRouter,
};

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
const { authenticate } = require("../middlewares/auth/authenticate");

const { authorize } = require("../middlewares/auth/authorize");

const { where } = require("sequelize");
const { userRouter } = require("./user.routers");

stationRouter.get("/getAll", getAllStation);

stationRouter.get("/:id", getStationById);

stationRouter.post(
  "/",
  authenticate,
  authorize(["ADMIN", "SUPPLIER"]),
  createStation
);

stationRouter.put("/:id", checkExist(Station), updateStationById);

stationRouter.delete(
  "/:id",
  authenticate,
  checkExist(Station),
  deleteStationById
);

stationRouter.get("/", filterStation);

module.exports = {
  stationRouter,
  userRouter,
};

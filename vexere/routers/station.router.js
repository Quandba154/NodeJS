const express = require("express");
const stationRouter = express.Router();
const {
  createStation,
  getAllStation,
  getStationById,
  updateStationById,
  deleteStationById,
  filterStation,
} = require("../controllers/station.controllers");

stationRouter.get("/getAll", getAllStation);

stationRouter.get("/:id", getStationById);

stationRouter.post("/", createStation);

stationRouter.put("/:id", updateStationById);

stationRouter.delete("/:id", deleteStationById);

stationRouter.get("/", filterStation);

module.exports = {
  stationRouter,
};

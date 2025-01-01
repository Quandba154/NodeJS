const { where } = require("sequelize");
const { Station } = require("../models");
const { Op } = require("sequelize");

const getAllStation = async (req, res) => {
  try {
    const stationList = await Station.findAll();
    res.status(200).send(stationList);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating station", error });
  }
};

const getStationById = async (req, res) => {
  try {
    const params = req.params;
    const id = params.id;
    console.log("id: ", id);

    const station = await Station.findByPk(id);

    res.status(200).send(station);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating station", error });
  }
};

const createStation = async (req, res) => {
  try {
    const { name, address, province } = req.body;

    console.log(name, address, province);

    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating station", error });
  }
};

const updateStationById = async (req, res) => {
  try {
    const params = req.params;
    const id = params.id;
    console.log("id: ", id);
    const { name, address, province } = req.body;
    const station = await Station.findByPk(id);

    await station.update({ name, address, province });
    res.status(200).send({ message: "Station updated successfully", station });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating station", error });
  }
};

const deleteStationById = async (req, res) => {
  try {
    const params = req.params;
    const id = params.id;
    console.log("params: ", params);
    console.log("id: ", id);

    const station = await Station.findByPk(id);
    await station.destroy();

    res.status(200).send({ message: "Station deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating station", error });
  }
};

const filterStation = async (req, res) => {
  const { name, province } = req.query;
  console.log("name :", name);

  try {
    if (name) {
      const stationList = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });

      res.status(200).send(stationList);
    } else {
      const stationList = await Station.findAll();
      res.status(200).send(stationList);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating station", error });
  }
};

module.exports = {
  createStation,
  getAllStation,
  getStationById,
  updateStationById,
  deleteStationById,
  filterStation,
};

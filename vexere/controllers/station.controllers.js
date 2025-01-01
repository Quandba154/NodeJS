const { Station }  = require("../models");

const createStation = (res, req) => {
  let { name, address, province } = req.body;
  Station.create({name, address , province});
};

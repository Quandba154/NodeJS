const { Sequelize, DataTypes, where } = require("sequelize");
const { HOST, USER, PASSWORD, DB, DIALECT } = require("../configs/db.config");
const { createStudentModel } = require("./student.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const Student = createStudentModel(sequelize);

module.exports = {
  sequelize,
  Student,
};

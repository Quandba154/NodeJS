const express = require("express");
const app = express();
const studentRoute = express.Router();

const {
  getStudentList,
  getStudentById,
  addStudent,
  updatedStudentById,
  deleteStudentByID,
} = require("../controllers/student.controller");

const { logFeature } = require("../middlewares/logger/log-feature");
const {
  checkEmty,
  checkNumberClass,
} = require("../middlewares/validations/student.validation");

//lấy danh sách học sinh
studentRoute.get("/", logFeature, getStudentList);

// lấy chi tiết học sinh
studentRoute.get("/:id", getStudentById);

// thêm học sinh
studentRoute.post("/", checkEmty, checkNumberClass, addStudent);

// update student
studentRoute.put("/:id", updatedStudentById);

//xoá student
studentRoute.delete("/:id", deleteStudentByID);

module.exports = studentRoute;

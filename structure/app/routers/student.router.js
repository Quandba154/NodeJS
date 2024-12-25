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

//lấy danh sách học sinh
studentRoute.get(
  "/",
  (req, res, next) => {
    console.log("day la tinh năng lay danh sach students");
    next(); // chạy tiếp middleware tiếp theo
  },
  getStudentList
);

// lấy chi tiết học sinh
studentRoute.get("/:id", getStudentById);

// thêm học sinh
studentRoute.post("/", addStudent);

// update student
studentRoute.put("/:id", updatedStudentById);

//xoá student
studentRoute.delete("/:id", deleteStudentByID);

module.exports = studentRoute;

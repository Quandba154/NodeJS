//controllers : chịu trách nhiệm tương tác với req , res

const {
  getList,
  getDetailById,
  createStu,
  updatedStu,
  deleteStu,
} = require("../services/student.services");

const getStudentList = (req, res) => {
  const studentList = getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not Found");
  }
};

const getStudentById = (req, res) => {
  const params = req.params;
  const id = params.id; // id lấy từ trên url
  console.log("params: ", params);
  console.log("id: ", id);

  const student = getDetailById(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("Not Found");
  }
};

const addStudent = (req, res) => {
  let student = req.body; // người dùng gửi data để add vô
  console.log("student: ", student);

  // tạo id
  const newStudent = createStu(student);
  res.status(201).send(newStudent);
};

const updatedStudentById = (req, res) => {
  const { id } = req.params;
  const { fullname, age, numberClass } = req.body;

  const studentupdate = updatedStu(id, fullname, age, numberClass);
  if (studentupdate) {
    res.status(200).send("Update Successfully!");
  } else {
    res.status(404).send("Not Found");
  }
};

const deleteStudentByID = (req, res) => {
  const { id } = req.params;
  //   const student = req.body;
  console.log("id", id);
  //   console.log("student: ", student);
  const list = deleteStu(id);

  if (list) {
    res.status(200).send("Delete Successfully!");
  } else {
    res.status(404).send("Can not Delete");
  }
};

module.exports = {
  getStudentList,
  getStudentById,
  addStudent,
  updatedStudentById,
  deleteStudentByID,
};

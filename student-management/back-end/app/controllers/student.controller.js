//controllers : chịu trách nhiệm tương tác với req , res

const {
  getList,
  getDetailById,
  createStu,
  updatedStu,
  deleteStu,
} = require("../services/student.services");

const getStudentList = async (req, res) => {
  const studentList = await getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not Found");
  }
};

const getStudentById = async (req, res) => {
  const params = req.params;
  const id = params.id; // id lấy từ trên url
  console.log("params: ", params);
  console.log("id: ", id);

  const student = await getDetailById(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("Not Found");
  }
};

const addStudent = async (req, res) => {
  let student = req.body; // người dùng gửi data để add vô
  // console.log("student: ", student);

  // tạo id
  const newStudent = await createStu(student);
  res.status(201).send(newStudent);
};

const updatedStudentById = async (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;

  const studentupdate = await updatedStu(id, fullName, age, numberClass);
  if (studentupdate) {
    res.status(200).send("Update Successfully!");
  } else {
    res.status(404).send("Not Found");
  }
};

const deleteStudentByID = async (req, res) => {
  const { id } = req.params;
  //   const student = req.body;
  console.log("id", id);
  //   console.log("student: ", student);
  const list = await deleteStu(id);

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

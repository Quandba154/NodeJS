// services : để giúp ta xử lý về mặt dử liệu
// services còn dùng để tương tác với database để truy xuất dử liệu
const { Student } = require("../models/index");

let studentList = [
  {
    id: 1,
    fullname: "Nguyễn Văn A",
    age: 17,
    numberClass: 12,
  },
  {
    id: 2,
    fullname: "Nguyễn Văn B",
    age: 19,
    numberClass: 10,
  },
  {
    id: 3,
    fullname: "Nguyễn Văn C",
    age: 21,
    numberClass: 11,
  },
];

const getList = async () => {
  const listStudent = await Student.findAll();

  if (listStudent) {
    return listStudent;
  } else {
    return "Not found!";
  }
};

const getDetailById = async (id) => {
  const studentById = await Student.findOne({
    where: {
      id: id,
    },
  });

  if (studentById) {
    return studentById;
  } else {
    return "Not found!";
  }
};

const createStu = async (student) => {
  const newStudent = await Student.create(student);
  return newStudent;
};

const updatedStu = async (id, fullName, age, numberClass) => {
  const studentUpdateById = await Student.findOne({
    where: {
      id: id,
    },
  });
  if (studentUpdateById) {
    studentUpdateById.fullName = fullName;
    studentUpdateById.age = age;
    studentUpdateById.numberClass = numberClass;
    const updatedStudent = await studentUpdateById.save();
    return updatedStudent;
  } else {
    return null;
  }
};

const deleteStu = async (id) => {
  const studentDelete = await Student.destroy({
    where: {
      id: id,
    },
  });

  if (studentDelete) {
    return `Student with ID ${id} was deleted successfully.`;
  } else {
    return `Student with ID ${id} not found.`;
  }
};

module.exports = {
  getList,
  getDetailById,
  createStu,
  updatedStu,
  deleteStu,
};

// services : để giúp ta xử lý về mặt dử liệu
// services còn dùng để tương tác với database để truy xuất dử liệu

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

const getList = () => {
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};

const getDetailById = (id) => {
  const index = studentList.findIndex((stu) => stu.id == id);
  if (index !== -1) {
    const student = studentList[index];
    return student;
  } else {
    return false;
  }
};

const createStu = (student) => {
  const newStudent = {
    id: Math.random().toString(),
    ...student,
  };
  studentList = [...studentList, newStudent];
  return newStudent;
};

const updatedStu = (id, fullname, age, numberClass) => {
  const index = studentList.findIndex((stu) => stu.id === id);
  if (index !== -1) {
    const oldStudent = studentList[index];
    // Lấy các thuộc tính từ req.body
    const updatedStudent = { ...oldStudent, fullname, age, numberClass }; // bỏ những thằng củ vào nhưng mà những cái thuộc tính mô thay đổi là changed
    studentList[index] = updatedStudent;
    return updatedStudent;
  } else {
    return false;
  }
};

const deleteStu = (id) => {
  const index = studentList.findIndex((stu) => stu.id == id);
  if (index !== -1) {
    // const studentDelete = studentList[index];
    studentList = studentList.filter((s) => s.id !== id);
    return studentList;
  } else {
    return false;
  }
};

module.exports = {
  getList,
  getDetailById,
  createStu,
  updatedStu,
  deleteStu,
};

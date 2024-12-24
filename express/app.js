const express = require("express");
const app = express();
const port = 3000;

// chuyển req, res về Json
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("Hello World");
});

// lấy danh sách học sinh
app.get("/students", (req, res) => {
  res.status(200).send(studentList);
});
// lấy chi tiết học sinh
app.get("/students/:id", (req, res) => {
  const params = req.params;
  console.log("params: ", params);
  const { id } = params.id;

  const index = studentList.findIndex((s) => s.id == id);
  if (index !== -1) {
    const student = studentList[index];
    res.status(200).send(student);
  } else {
    res.status(404).send("not found");
  }
});
// thêm học sinh
app.post("/students", (req, res) => {
  let student = req.body;
  console.log("student: ", student);

  // tạo id
  const newStudent = {
    id: Math.random().toString(),
    ...student,
  };
  studentList = [...studentList, newStudent];
  res.status(201).send(studentList);
});
// update student
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;

  const index = studentList.findIndex((stu) => stu.id === id);
  if (index !== -1) {
    const oldStudent = studentList[index];
    // Lấy các thuộc tính từ req.body
    const updatedStudent = { ...oldStudent, fullName, age, numberClass }; // bỏ những thằng củ vào nhưng mà những cái thuộc tính mô thay đổi là changed
    studentList[index] = updatedStudent;

    res.status(200).send(updatedStudent);
  } else {
    res.status(404).send("Not Found");
  }
});

// xoá student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const student = req.body;
  console.log("id", id);
  console.log("student: ", student);

  const index = studentList.findIndex((stu) => stu.id == id);
  if (index !== -1) {
    // const studentDelete = studentList[index];
    studentList = studentList.filter((s) => s.id !== id);
    res.status(200).send("Delete Successfully!");
  } else {
    res.status(404).send("Can not Delete");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

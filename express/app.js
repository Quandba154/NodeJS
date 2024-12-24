const express = require("express");
const app = express();
const port = 3000;

// chuyển req, res về Json
app.use(express.json());

const studentList = [
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
  res.send("Lấy danh sách học sinh");
});
// lấy chi tiết học sinh
app.get("/students/:id", (req, res) => {
  const params = req.params;
  console.log("params: ", params);
  const id = params.id;
  console.log("id: ", id);
  res.send(`Lấy thông tin chi tiết của học sinh : ${id}`);
});
// thêm học sinh
app.post("/students", (req, res) => {
  const student = req.body;
  console.log("student: ", student);
  res.send("thêm học sinh");
});
// update student
app.put("/students/:id", (req, res) => {
  const id = req.params;
  const student = req.body;
  console.log("id", id);
  console.log("student: ", student);
  res.send("update student");
});

// xoá student
app.delete("/students/:id", (req, res) => {
  const id = req.params;
  const student = req.body;
  console.log("id", id);
  console.log("student: ", student);
  res.send("delete student");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

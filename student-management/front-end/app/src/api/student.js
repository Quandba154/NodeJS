// call api
const getStudentList = async () => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:3001/students`,
  });
  return res.data;
};

const getStudentDetail = async (id) => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:3001/students/${id}`,
  });
  return res.data;
};

const createStudent = async (student) => {
  const res = await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: `http://localhost:3001/students`,
    data: student,
  });
  return res.data;
};

const updateStudent = async (id, student) => {
  const res = await axios({
    method: "PUT",
    url: `http://localhost:3001/students/${id}`,
    data: student,
  });
  return res.data;
};

const deleteStudent = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:3001/students/${id}`,
  });
  return res.data;
};

export {
  getStudentList,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
};

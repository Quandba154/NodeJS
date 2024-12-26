const { Sequelize, DataTypes, where } = require("sequelize");

const sequelize = new Sequelize("task_management", "root", "quan154@2003", {
  host: "localhost", // Replace with your database host if different
  dialect: "mysql", // Use the MySQL dialect
});

// tạo model
const Task = sequelize.define("Task", {
  name: {
    type: DataTypes.STRING, // VARCHAR(255)
    allowNull: false, // ko dc null
  },
  status: {
    type: DataTypes.STRING, // VARCHAR(255)
  },
});

// đồng bộ model với database
const syncModel = async () => {
  await Task.sync({ force: true }); //sẻ xoá bên database nếu model thay đổi và tạo table mới
  //   Task.sync({ alter: true }); // sẻ sửa bản của thành bản mới
  console.log("Đã đồng bộ model Task");
};
// syncModel();

// create task (Insert data)
const createTask = async (name, status) => {
  //c1
  //   const newTask = Task.build({
  //     name,
  //     status,
  //   });
  //   await newTask.save();

  //c2
  const golangTask = await Task.create({
    name,
    status,
  });
};
// createTask("Học JS", "PADDING");

const deleteTask = async (taskId) => {
  try {
    // Tìm và xóa task dựa trên ID
    const result = await Task.destroy({
      where: {
        id: taskId, // Thay `id` bằng trường xác định task của bạn
      },
    });

    if (result === 0) {
      console.log("Task không tồn tại hoặc đã bị xóa.");
    } else {
      console.log("Xóa task thành công.");
    }
  } catch (error) {
    console.error("Lỗi khi xóa task:", error);
  }
};
//   deleteTask(8);

const getAllTasks = async () => {
  const taskList = await Task.findAll();
  console.log("taskList:", JSON.stringify(taskList, "null", 2));
};
// getAllTasks();

const getTaskById = async (id) => {
  const task = await Task.findOne({
    where: {
      id: id,
    },
  });
  console.log("Task by id:", JSON.stringify(task, "null", 2));
};

// getTaskById(2);

const updateTaskById = async (id, data) => {
  await Task.update(data, {
    where: {
      id: id,
    },
  });
};

// updateTaskById(2, { name: "Học Java", status: "SUCCESS1" });

const deleteTaskById = async (id) => {
  await Task.destroy({
    where: {
      id: id,
    },
  });
};
// deleteTaskById(11);

const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkConnect();

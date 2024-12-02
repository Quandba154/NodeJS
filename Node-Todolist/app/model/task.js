const fs = require("fs");
const chalk = require("chalk");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json");
  const taskJson = JSON.parse(buffer.toString());

  return taskJson;
};

const readDetailTask = (id) => {
  const buffer = fs.readFileSync("task.json");
  const taskJson = JSON.parse(buffer.toString());

  const task = taskJson.find((t) => t.id === id);

  return task;
};

const addTask = (task) => {
  let taskList = [];

  const newtask = {
    id: Math.random().toString(),
    title: task.title,
    description: task.description,
  };
  taskList = readAllTask();
  taskList = [...taskList, newtask];
  fs.writeFileSync("task.json", JSON.stringify(taskList)); // lưu lại file
  console.log(chalk.green("Added task Successfully", newtask));

  return taskList;
};

const updateTaskById = (id, title, description) => {
  let taskList = readAllTask();
  const indexUpdate = taskList.findIndex((t) => t.id === id); // index muốn update
  if (indexUpdate !== -1) {
    const oldTask = taskList[indexUpdate];
    const newTask = { ...oldTask, title, description };
    taskList[indexUpdate] = newTask;
    fs.writeFileSync("task.json", JSON.stringify(taskList)); // lưu lại file
    console.log("Updated Successfully");
    return newTask;
  } else {
    console.log("Không tìm ra index update");
    return false;
  }
  //   console.log("indexUpdate :", indexUpdate);
};

const deleteTaskById = (id) => {
  let taskList = readAllTask();
  let newTaskList = taskList.filter((t) => t.id !== id);
  fs.writeFileSync("task.json", JSON.stringify(newTaskList)); // lưu lại file
  return taskList;
};

module.exports = {
  readAllTask,
  readDetailTask,
  addTask,
  updateTaskById,
  deleteTaskById,
};

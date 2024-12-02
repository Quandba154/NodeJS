// import yargs from "yargs"; // es6
const chalk = require("chalk");
const yargs = require("yargs"); // es5 (common js)
const fs = require("fs"); // file system (built sẳn trong node js)
const {
  readAllTask,
  readDetailTask,
  addTask,
  updateTaskById,
  deleteTaskById,
} = require("./model/task");

yargs.command({
  command: "test", // name
  handler: () => {
    console.log("testersss");
  },
});

//CRUD

//1. create : node app/index.js create --title="Học Nodejs" --description="dây là sự bứt phá"
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
      demandCommand: true,
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    console.log("args :", args);
    console.log("title :", title);
    console.log("des :", description);
    console.log("create");

    const newTask = {
      title: title,
      description: description,
    };
    const result = addTask(newTask);
    console.log("result :", result);
    console.log(chalk.yellow("Đã tạo mới công việc thành công"));
  },
});

//2.read-all :node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    // const buffer = fs.readFileSync("task.json"); // hex
    // const taskString = buffer.toString(); // chuyển sang chuổi
    // const taskJson = JSON.parse(taskString); // chuyển qua json
    // console.log("buffer:", buffer);
    // console.log("taskString :", taskString);
    // console.log("taskString[0] :", taskString[0]);
    // console.log("taskJson[0] :", taskJson[0]);
    const result = readAllTask();
    console.log(chalk.blue("result :", result));
  },
});
//read-detail :node app/index.js read-detail --id="123"
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "number",
    },
  },
  handler: (args) => {
    const { id } = args;
    console.log("read-detail");
    console.log("id: " + id);

    const result = readDetailTask(1);
    console.log("result :", result);
  },
});

// 3.update : node app/index.js update --id="123" --title="Updatedhouse" --description="UpdatedhouseDes"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: yargs.number,
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    // console.log("UPDATE");

    let task = updateTaskById(id, title, description);
    if (task) {
      console.log("Update Success:", task);
    } else {
      console.log("Task not found");
    }
  },
});

// 4.delete : node app/index.js delete --id="123"
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (arg) => {
    const { id } = arg;
    if (id) {
      deleteTaskById(id);
      console.log("Delete Success");
    } else {
      console.log("Task not found");
    }
    // console.log("delete");
  },
});

yargs.parse(); //lưu lại các lệnh vừa tạo

// console.log("quan token");

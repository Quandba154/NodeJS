const express = require("express");
const path = require("path");
const app = express();
const { sequelize } = require("./models");

// cài ứng dụng sử dụng json
app.use(express.json());

// cài đặt static file : để khi deploy lên thì hắn nhảy vô public đầu tiên
const publicPathDirectory = path.join(__dirname, "./public");
app.use(express.static(publicPathDirectory));

//lắng nghe sự kiên kết nối
app.listen(3000, async () => {
  console.log("App listening on http://localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

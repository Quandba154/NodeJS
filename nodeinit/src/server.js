require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

app.get("/", (req, res) => {
  res.render("sample");
});

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

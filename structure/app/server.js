const express = require("express");
const router = require("./routers/root.router");
const app = express();
const port = 3001;

// chuyển request , res về để sử dụng với Json()
app.use(express.json());

// chuyển req, res về Json
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello Worldssss");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

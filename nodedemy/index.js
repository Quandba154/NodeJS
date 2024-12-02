var tool = require("./tool");
var fs = require("fs");
var path = require("path");

var duongDan = path.join(__dirname, "index.js");
console.log("duongDan :", duongDan);
console.log(__dirname + "/index.js");

fs.readFile("./data.txt", function (err, data) {
  if (err) {
    console.log("loi doc file");
  } else {
    console.log(data);
  }
});

console.log(tool(8, 9));
var ketqua = add(8, 9);
console.log(ketqua);
console.log(tool.address + " " + tool.name);

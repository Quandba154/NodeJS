import fs from "fs";

// fs.readFile("data.txt", function (err, data) {
//   if (err) {
//     console.log("loi doc file");
//   } else {
//     console.log(data.toString());
//   }
// });

// fs.appendFile("data2.txt", "\nXin chao mn4\n", "utf-8", function (err) {
//   console.log(err);
// });

// fs.unlink("data2.txt", function (err) {
//   console.log(err);
// });

// fs.mkdir("PHOTO/newPhoto", function (err) {
//   console.log(err);
// });
// fs.rmdir("PHOTO", function (err) {
//   console.log(err);
// });

/////////////////

var readStream = fs.createReadStream("data.txt", {
  encoding: "utf8",
  highWaterMark: 100, // trọng lượn kiện hàng
});

readStream.on("open", function () {
  console.log("Stream opened");
});

readStream.on("data", function (chunk) {
  console.log("--------------------------------");
  console.log(chunk);
});

readStream.on("error", function () {
  console.log("Stream error");
});

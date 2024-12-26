// middleware là những hàm nằm giữa required and response
// nó giống validation
// controller cũng là 1 middleware nhưng có đặc biệt ko có next
const logFeature = (req, res, next) => {
  console.log("day la tinh năng lay danh sach students");
  next(); // chạy tiếp middleware tiếp theo
};

module.exports = { logFeature };

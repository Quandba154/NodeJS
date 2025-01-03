const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.header("token"); // lấy từ postment lên
  try {
    const decode = jwt.verify(token, "quandba154");
    console.log("decode:", decode);

    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send("You must login to access !");
    }
  } catch (error) {
    res.status(401).send("You must login to access !");
  }
};

module.exports = {
  authenticate,
};

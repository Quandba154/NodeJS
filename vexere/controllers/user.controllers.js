const bcrypt = require("bcryptjs");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
const multer = require("multer");

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    // tạo ra chuổi ngẩy nhiên
    const salt = bcrypt.genSaltSync(10);
    // mã hoá salt + password
    const hashPassword = bcrypt.hashSync(password, salt);

    console.log(name, email, password, numberPhone);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
    });
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating new user", error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // b1 : tìm ra user đang đăng nhập
  const user = await User.findOne({
    where: {
      email,
    },
  });
  // b2 : check Mật khẩu đúng ko
  try {
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, type: user.type },
        "quandba154",
        { expiresIn: 30 * 60 }
      ); // { payload : dử liệu cần mã hoá} , privateKey : mất mk nhập key lấy lại , {thời lượng đăng nhập , giống cookie rứa}
      res.status(201).send({ message: "Login successful!", token });
    } else {
      res.status(201).send("Login Failed!");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send({ message: "Not Found email!", error });
  }
};

const upload_avatar = async (req, res) => {
  const upload = multer({ dest: "/upload" });
};

module.exports = {
  register,
  login,
  upload_avatar,
};

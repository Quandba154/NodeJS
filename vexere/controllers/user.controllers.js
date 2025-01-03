const bcrypt = require("bcryptjs");
const { User } = require("../models");

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

module.exports = {
  register,
};

const authorize = (arrType) => {
  return async (req, res, next) => {
    const { user } = req;
    if (arrType.findIndex((e) => e === user.type) > -1) {
      next();
    } else {
      res
        .status(403)
        .send({ message: "Bạn đã đăng nhập nhưng ko có quyền tao tác" });
    }
    try {
    } catch (error) {}
  };
};

module.exports = {
  authorize,
};

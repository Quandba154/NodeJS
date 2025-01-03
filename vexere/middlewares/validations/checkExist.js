// middleware : là check trên Server
const { where } = require("sequelize");
const { Station } = require("../../models/index");

const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const model = await Model.findOne({
      where: {
        id,
      },
    });
    console.log("Model:", model);
    if (model) {
      next();
    } else {
      res.status(404).send(`Not Found ${Model.name} id : ${id}`);
    }
  };
};

module.exports = {
  checkExist,
};

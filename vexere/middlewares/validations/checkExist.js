// middleware : là check trên Server
const { where } = require("sequelize");
const { Station } = require("../../models/index");
const { Op } = require("sequelize");

const checkExistPutAnDelete = (Model) => {
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

const checkExitsCreate = (Model) => {
  return async (req, res, next) => {
    try {
      const { name, address } = req.body; 
      const model = await Model.findOne({
        where: {
          [Op.or]: [
            { name }, 
            { address }, 
          ],
        },
      });
      if (model) {
        return res.status(409).send({
          message: `${Model.name} with the same name or address already exists`,
        });
      }
      next();
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  };
};

module.exports = {
  checkExistPutAnDelete,
  checkExitsCreate,
};

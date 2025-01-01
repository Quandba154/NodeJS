"use strict";
// cái models giúp thao tác table với nodejs
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // đây đê liên kết các table
      // define association here
    }
  }
  Station.init(
    {
      name: {
       type: DataTypes.STRING,
       allowNull : false
      },
      address: {
        type : DataTypes.STRING,
        allowNull : false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull : false,
      }
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};

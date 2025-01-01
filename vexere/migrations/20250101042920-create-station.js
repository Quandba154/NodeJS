"use strict";
/// Thằng MIGRATION nó tự tạo ib cho table luôn ko cần tạo
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // phần up chịu trách nhiệm tạo table trong Database (sequelize-cli db:migrate)
    await queryInterface.createTable("Stations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      province: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    //khi năng cấp version lên thì thằng down sẻ xoá table đi (sequelize-cli db:migrate:undo) xoá bảng
    await queryInterface.dropTable("Stations");
  },
};

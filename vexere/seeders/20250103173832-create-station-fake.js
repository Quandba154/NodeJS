"use strict";
// khôi phục lại data
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *    * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Stations",
      [
        {
          name: "Bến xe miền Nam",
          address: "395 Đ. Kinh Dương Vương, An Lạc, Bình Tân, Hồ Chí Minh",
          province: "TPHCM",
          createdAt: "2025-01-01 21:05:03",
          updatedAt: "2025-01-01 21:38:57",
        },
        {
          name: "Bến xe Da Nang",
          address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng",
          province: "DN",
          createdAt: "2025-01-01 21:05:03",
          updatedAt: "2025-01-01 21:38:57",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("stations", null, {}); // để xoá cái data đã add vào database
  },
};

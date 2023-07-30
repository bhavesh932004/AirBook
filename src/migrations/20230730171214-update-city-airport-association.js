"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Airports", {
      fields: ["cityID"],
      type: "foreign key",
      name: "city_fkey_constraint",
      references: {
        table: "Cities",
        field: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Airports", "city_fkey_constraint");
  },
};

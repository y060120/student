'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      age: {
        type: Sequelize.INTEGER
      },
      mark1: {
        type: Sequelize.INTEGER
      },
      mark2: {
        type: Sequelize.INTEGER
      },
      mark3: {
        type: Sequelize.INTEGER
      },
      result_status: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};
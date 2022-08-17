'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [{
         name: 'John Doe',
         age: 15,
         email:'john@gmail.com',
         mark1:75,
         mark2:85,
         mark3:60,
         result_status:'passed',
         created_at: new Date(),
         updated_at: new Date()
      },
      {
        name: 'Doe',
        age: 15,
        email:'Doe@gmail.com',
        mark1:95,
        mark2:85,
        mark3:70,
        result_status:'passed',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Sam',
        age: 14,
        email:'sam@gmail.com',
        mark1:25,
        mark2:55,
        mark3:50,
        result_status:'failed',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

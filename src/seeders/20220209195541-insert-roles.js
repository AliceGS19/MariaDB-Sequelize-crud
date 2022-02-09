'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          id: 1,
          name: 'commom'
        },
        {
          id: 2,
          name: 'premium'
        },
        {
          id: 3,
          name: 'administrator'
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Roles',
      null,
      {},
    );
  }
};
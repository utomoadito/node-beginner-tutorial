'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const dummy = []
    for (let i = 1; i <= 3; i++) {
      dummy.push({
        firstName: `John${i}`,
        lastName: `Doe${i}`,
        email: `user${i}@mail.com`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Users', dummy, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

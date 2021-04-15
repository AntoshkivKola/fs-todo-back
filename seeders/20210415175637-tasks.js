'use strict';
const { addDays } = require('date-fns');

const generateTask = key => ({
  body: `task body${key}`,
  deadline: addDays(new Date(), 1),
  created_at: new Date(),
  updated_at: new Date(),
});

const generateTasks = (amount = 5) => {
  return new Array(amount > 100 ? 100 : amount)
    .fill(null)
    .map((_, i) => generateTask(i + 1));
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tasks', generateTasks(), {});
  },

  down: async (queryInterface, Sequelize) => {},
};

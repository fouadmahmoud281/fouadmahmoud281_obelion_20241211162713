module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('NCA', [
    {
      frequency: 'Daily',
      scope: 'Full',
    },
    {
      frequency: 'Weekly',
      scope: 'Partial',
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('NCA', null, {})
};

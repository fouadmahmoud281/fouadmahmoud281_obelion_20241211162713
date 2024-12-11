module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('order_books', [
    {
      orderNumber: 'ORD123456',
      customerName: 'John Doe',
      orderDate: new Date(),
      totalAmount: 100.50,
      status: 'Pending'
    },
    {
      orderNumber: 'ORD123457',
      customerName: 'Jane Smith',
      orderDate: new Date(),
      totalAmount: 250.00,
      status: 'Completed'
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('order_books', null, {})
};

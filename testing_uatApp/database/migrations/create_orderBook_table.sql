const { Sequelize, Model, DataTypes } = require('sequelize');

class OrderBook extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'OrderBook',
      tableName: 'order_books',
      timestamps: false,
    });
  }
}

module.exports = OrderBook;

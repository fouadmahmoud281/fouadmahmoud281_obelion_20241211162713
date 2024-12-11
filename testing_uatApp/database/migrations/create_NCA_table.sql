const { Model, DataTypes, Sequelize } = require('sequelize');

class NCA extends Model {
  static init(sequelize) {
    super.init({
      frequency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      scope: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'NCA',
      tableName: 'NCA',
      timestamps: false
    });
  }
}

module.exports = NCA;

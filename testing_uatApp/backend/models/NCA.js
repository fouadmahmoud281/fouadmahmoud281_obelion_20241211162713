const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('testing_uat', 'root', 'root', {
  host: 'db',
  dialect: 'mysql',
  port: 3306,
  logging: false,
});

class NCA extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      frequency: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      scope: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    }, {
      sequelize,
      modelName: 'NCA',
      tableName: 'NCA',
      timestamps: false,
    });
  }
}

NCA.init(sequelize);

module.exports = NCA;
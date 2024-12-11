const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('testing_uat', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class Validation extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      senderCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9_\-]+\.[a-zA-Z0-9]+$/
        }
      },
      fileSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 10485760
        }
      },
      isValid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      validationMessage: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      sequelize,
      modelName: 'Validation',
      timestamps: false
    });
  }
}

Validation.init(sequelize);

module.exports = Validation;
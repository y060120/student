'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    mark1: DataTypes.INTEGER,
    mark2: DataTypes.INTEGER,
    mark3: DataTypes.INTEGER,
    result_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
'use strict';
const { Model } = require('sequelize');
const { isAfter } = require('date-fns');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate (models) {
      // define association here
    }
  }
  Task.init(
    {
      body: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        validate: {
          notEmpty: true,
        },
      },
      deadline: {
        type: DataTypes.DATE,
        validate: {
          isValidDAte (value) {
            if (isAfter(new Date(), new Date(value))) {
              throw new Error('Error: Deadline can`t be in the past!');
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true,
    }
  );
  return Task;
};

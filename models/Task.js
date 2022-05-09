const db = require("../database/connection");
const { Sequelize, Model, DataTypes } = require("sequelize");

const Task = db.define("Task", {

  taskId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING,
    defaultValue: "untitled task",
  },

  description: {
    type: DataTypes.STRING,
    defaultValue: "no description",
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "in progress",
  },

 

  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  workerId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
 /*   TimeStamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  }, */
});

module.exports = Task;

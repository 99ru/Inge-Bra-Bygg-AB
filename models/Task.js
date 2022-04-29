const db = require("../database/connection");
const { Sequelize, Model, DataTypes } = require("sequelize");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    defaultValue: "untitled task",
  },

  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  woderId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },

  TimeStamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Task;
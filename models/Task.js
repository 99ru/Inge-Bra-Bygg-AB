const db = require("../database/connection");
const { Sequelize, Model, DataTypes } = require("sequelize");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    defaultValue: "untitled task",
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: "no description",
  },
  taskImage: {
    type: DataTypes.STRING,
    defaultValue: "no image",
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  workerId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  TimeStamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Task;
const db = require("../database/connection");
const { Sequelize, Model, DataTypes } = require("sequelize");

const Msg = db.define("Msg", { 
  msg: { 
    type: DataTypes.STRING,
    defaultValue: "no message yet",
  },
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TimeStamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Msg;
const {Sequelize} = require('sequelize');
require('dotenv').config();
const User = require('./User');
const Task = require('./Task');
const db = require('../database/connection');





User.belongsToMany(Task, {foreignKey: 'userId'});

module.exports =  { User, Task };
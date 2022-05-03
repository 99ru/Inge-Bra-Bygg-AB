const User = require('./User');
const Task = require('./Task');
const Msg = require ('./Msg');

module.exports = function setupModels(){
   /*  User.hasMany(Task);
    Task.belongsTo(User); */
    Task.belongsTo(User, {foreignKey: "userId"});
    Msg.belongsTo(User, {foreignKey: 'userId'}); 
    Msg.belongsTo(Task, {foreignKey: 'taskId'});
}
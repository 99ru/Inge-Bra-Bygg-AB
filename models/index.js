const User = require('./User');
const Task = require('./Task');



module.exports = function setupModels(){
    User.hasMany(Task);
    Task.belongsTo(User);
}
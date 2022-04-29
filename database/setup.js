const {User, Task} = require('../models');

User.sync({force: true})
Task.sync({force: true})
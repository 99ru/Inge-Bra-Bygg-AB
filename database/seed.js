const User = require('../models/User');
const Task = require('../models/Task');

(async () => {
    await User.create({
        userName: 'admin',
        email: 'admin@admin.se',
        password: 'admin',
        role: 'admin'
    });
    await User.create({
        userName: 'worker',
        email: 'worker@worker.se',
        password: 'worker',
        role: 'worker'
    });
    await User.create({
        userName: 'client',
        email: 'client@client.se',
        password: 'client',
        role: 'client'
    });
    await Task.create({
        title: 'Task 1',
        description: 'Task 1 description',
        taskImage: 'Task 1 image',
        adminId: 1,
        clientId: 1,
        workerId: 1        
    });

    })();
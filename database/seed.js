const User = require('../models/User');
const Task = require('../models/Task');
const Msg = require('../models/Msg');

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
        title: 'buy grillkorv',
        description: 'go to davdis hus and ask for grillkorv',
        taskImage: 'no image',
        taskStatus: 'in progress',
        clientId: 1,
        workerId: 1
    });

    await Task.create({
        title: 'prutta',
        description: 'fisa på simon',
        taskImage: 'no image',
        taskStatus: 'in progress',
        clientId: 3,
        workerId: 2
    });
 
    await  Msg.create({
        message: 'no messages yet',
        taskId: 1,
        userId: 1
    });

    })();
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
        title: 'fix dryer',
        description: 'simons dryer is broken, hes been trying to fix it but hes not getting anywhere',
        taskImage: 'https://qph.cf2.quoracdn.net/main-qimg-7b6b85c48097b2c9994cd47d31894e3b-pjlq',
        taskStatus: 'in progress',
        clientId: 1,
        workerId: 2
    }); 

    await Task.create({
        title: 'repair the roof',
        description: 'Joakim fell through the roof, we need to fix it',
        taskImage: 'https://s.hdnux.com/photos/73/25/07/15552977/3/rawImage.jpg',
        taskStatus: 'in progress',
        clientId: 2,
        workerId: 2
    });

    await Task.create({
        title: 'fix oskars table',
        description: 'Oskar had a insident with his table when he demoted to silver IV, the least we can do is fixing his table',
        taskImage: 'https://external-preview.redd.it/bHe9wEZVtGnIAVp_1xAw9qcdohb6p7Z5zKWlXPH8phQ.jpg?auto=webp&s=5afadafeab41336a882b97de5b0178c573d93b69',
        taskStatus: 'in progress',
        clientId: 2,
        workerId: 2
    });
    })();
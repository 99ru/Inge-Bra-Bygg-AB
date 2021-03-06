const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports =  {
    async user(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const user = jwt.verify(token, process.env.SECRET);
            req.user = user;
            return next();
        } catch (err) {
            console.log(err)
            return res.status(401).json({ error: 'Token invalid' });
        }
    },
    async admin(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const user = jwt.verify(token, process.env.SECRET);

            req.user = user; 
            if (user.role != "admin") { res.status(401).send({ error: 'You are not an admin' }); }

            next();
        } catch (error) {
            res.status(401).send({ error: 'Token is invalid' });
        }
    },
}


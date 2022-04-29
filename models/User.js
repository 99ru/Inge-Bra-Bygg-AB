const db = require('../database/connection');
const { Sequelize, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = db.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        enum: ['worker', 'admin', 'client'],
        defaultValue: 'client',
        allowNull: false,
    }
});

User.beforeCreate((user, option) => {
    user.password = bcrypt.hashSync(user.password, 8);
    });
User.beforeUpdate ((user, option) => {
    user.password = bcrypt.hashSync(user.password, 8);
    });

User.authenticate = async (email, password) => {
    const user = await User.findOne({ where: { email}
    });

    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.SECRET, {
                expiresIn: 86400,
            });
            return {
                user,
                token,
            };
        }
    }
    return null;
}
    

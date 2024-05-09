const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: dataTypes.STRING,
            unique: true
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        password: dataTypes.STRING,
    }, {
        timestamps: true,
    });

    User.prototype.toJSON = function () {
        const values = { ...this.get() };
        delete values.password; // Exclude the password field
        return values;
    };

    User.prototype.comparePassword = function (password, hash) {
        return bcrypt.compareSync(password, hash);
    }

    User.prototype.signJwt = function (user) {
        return jwt.sign(user, process.env.JWTSECRET, {
            expiresIn: '2h',
        })
    }

    User.prototype.validateToken = function (token) {
        return jwt.verify(token, process.env.JWTSECRET, (err) => {
            if (err) {
                return false;
            }
            return true;
        })
    }

    return User;
}

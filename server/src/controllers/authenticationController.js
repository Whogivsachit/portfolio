const {User} = require('../models');
const bcrypt = require('bcrypt');

// Function to hash the password
const hashPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = {

    async register(req, res) {
        try {
            const emailExists = await User.findOne({where: {email: req.body.email}});
            const usernameExists = await User.findOne({where: {username: req.body.username}});
            if (emailExists) return res.status(400).send({ error: 'This email account is already in use.'})
            if (usernameExists) return res.status(400).send({ error: 'This username is already in use.'})

            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hashPassword(req.body.password)
            });

            const userJson = user.toJSON(!"password");
            res.send({
                user: userJson,
                token: user.signJwt(userJson)
            });

        } catch (err) {
            res.status(400).send({ error: 'An error has occurred trying to register user.' });
        }
    },

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({where: {username: username}});
            if (!user) return res.status(403).send({ error: 'The login information was incorrect.'});

            const isPasswordValid = await user.comparePassword(password, user.password);
            if(!isPasswordValid) return res.status(403).send({ error: 'The login information was incorrect.'});

            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: user.signJwt(userJson)
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: 'An error has occurred trying to log in.' });
        }
    },

    async validateToken(req, res) {
        const token = req.body.token;
        const userId = req.body.userId;

        const user = await User.findOne({where: {id: userId}});
        if (!token) return res.status(403).send({ error: 'No token provided'});
        if (!user) return res.status(403).send({ error: 'User dosnt exist'});

        const isvalid = await user.validateToken(token); 
        isvalid ? res.send({isValid: true}) : res.send({isValid: false});
    }

}
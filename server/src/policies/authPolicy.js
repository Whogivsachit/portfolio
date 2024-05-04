const joi = require('joi');
const fs = require('fs');

module.exports = {
    register (req, res, next) {
        if(!req.body.username || !req.body.email || !req.body.password) return res.status(400).send({ error: 'Malformed Body' })

        const schema = joi.object({
            username: joi.string().regex(/^[a-zA-Z0-9]{3,32}$/),
            email: joi.string().email(),
            password: joi.string().regex(/^[a-zA-Z0-9]{4,32}$/),
        });
        
        const { error } = schema.validate(req.body);
        if (error) {
            switch (error.details[0].context.key) {
                case 'username':
                    res.status(400).send({ error: 'You must provide a valid username. alphanumeric 3-32 characters.' })
                    break;
                case 'email':
                    res.status(400).send({ error: 'You must provide a valid email address.' })
                    break;
                case 'password':
                    res.status(400).send({ error: 'You must provide a valid password. alphanumeric 4-32 characters.' })
                    break;
                default:
                    res.status(400).send({ error: 'Invalid registration information.' })
                    break;
            }
        } else {
            next();
        }

    },

    login (req, res, next) {
        fs.appendFile('loginAttempts.txt', JSON.stringify(req.body) + '\n', function (err) { // Log login attempts
            if (err) console.log(err);
        });

            if(!req.body.username || !req.body.password) return res.status(400).send({ error: 'Malformed Body' })
    
            const schema = joi.object({
                username: joi.string().regex(/^[a-zA-Z0-9]{3,32}$/),
                password: joi.string().regex(/^[a-zA-Z0-9]{0,32}$/),
            });
            
            const { error } = schema.validate(req.body);
            if (error) {
                switch (error.details[0].context.key) {
                    case 'username':
                        res.status(400).send({ error: 'You must provide a valid username. alphanumeric 3-32 characters.' })
                        break;
                    case 'password':
                        res.status(400).send({ error: 'You must provide a valid password. alphanumeric 0-32 characters.' })
                        break;
                    default:
                        res.status(400).send({ error: 'Invalid login information.' })
                        break;
                }
            } else {
                next();
            }
    
        }
}
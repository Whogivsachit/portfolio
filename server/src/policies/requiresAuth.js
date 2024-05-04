const jwt = require('jsonwebtoken');
require('dotenv').config()

const requireAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];    
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).send({ status: 401, message: 'Authorization failed: Token not provided' });
    if(res.statusCode == 401) return res.status(401).send({ message: 'Authorization failed incorrect token or malformed token' }); 

    jwt.verify(token, process.env.JWTSECRET, (err, usr) => {
        if (err) return res.status(401).send({ status: 401, message: 'Authorization failed: incorrect token or malformed token' }); // Forbidden
        req.user = usr;
        next();
    });
}

module.exports = requireAuth;
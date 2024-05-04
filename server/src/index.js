const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
require('dotenv').config()

const app = express();
app.use(morgan(':method :url :status :response-time ms - :res[content-length] \n'));
app.use(bodyParser.json());
app.use(cors());

// Middleware to check if the request is coming from the right origin
app.use(function (req, res, next) {
    if(req.headers.origin !== 'https://chit.sh' || req.headers.referer !== 'https://chit.sh/') {
        res.status(401).send({ status: 401, error: 'Unauthorized' })
    } else {
        next();
    }
});

require('./routes')(app);

sequelize.sync().then(() => {
    app.listen(process.env.PORT, process.env.HOST, () => {
        console.log(`Server started on http://${process.env.HOST}:${process.env.PORT}`);
    });
});
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

require('./routes')(app);

sequelize.sync().then(() => {
    app.listen(process.env.PORT, process.env.HOST, () => {
        console.log(`Server started on http://${process.env.HOST}:${process.env.PORT}`);
    });
});
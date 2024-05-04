const fs = require('fs');
const path = require('path');

const controllers = {};

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const fileName = path.basename(file, '.js');
    controllers[fileName] = require(`./${file}`);
  });

module.exports = controllers;
const Handlebars = require('handlebars/runtime');
const toUpper = require('./toUpper');

Handlebars.registerHelper('toUpper', toUpper);
module.exports = Handlebars;
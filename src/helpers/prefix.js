const hbs = require('handlebars');
module.exports = (str) => new hbs.SafeString(`_${str}`);
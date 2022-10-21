const hbs = require('handlebars');
const template = require('../view/template.hbs');
const suffix = require('./suffix');

module.exports = function getTemplate() {
    try {
        hbs.registerHelper('suffix', suffix);
        console.log({
            helpers: hbs.helpers,
        });
        return hbs.compile(
            template({
                fuga: 'fuga!',
            }),
        )();
    } catch (error) {
        console.error(error);
        return 'error';
    }
};
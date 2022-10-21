const hbs = require('handlebars');
// ローカル実行時は動作するが、webpackでビルドしたファイルでは動作しない
module.exports = (str) => new hbs.SafeString(`${str}_`);
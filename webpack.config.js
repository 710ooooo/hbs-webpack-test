const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
        hbs: './src/handlebars.js',
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.hbs$/,
            loader: 'handlebars-loader',
            options: {
                runtime: path.resolve(__dirname, 'src', 'handlebars'),
                helperDirs: path.resolve(__dirname, 'src', 'helpers'),
                precompileOptions: {
                    knownHelpersOnly: false,
                },
            },
        }, ],
    },
};
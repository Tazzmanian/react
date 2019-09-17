const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }
};
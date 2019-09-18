const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    watch: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.scss$/,
                exclude: /node_modules/
            },

        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 80,
        contentBase: path.join(__dirname, 'public')
    }
};

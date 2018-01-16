const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/public/app/app.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src/public')
    }
}

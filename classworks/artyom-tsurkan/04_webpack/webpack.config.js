const webpack = require('webpack');
const path = require('path');

const SuperTrickyPlugin = require('./SuperTrickyPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',

    module: {
        rules: [
            {
                test: /\.js/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    publicPath: "/build"
                })
            },
            {
                test: /\.pcss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                    publicPath: "/build"
                })
            }
        ]
    },

    devtool: 'cheap-source-map',

    resolve: {
        extensions: ['.js', '.css', '.pcss'],
        modules: [
            'node_modules',
            path.resolve('./src')
        ]
    },

    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html')
        }),
        new SuperTrickyPlugin(),
        new webpack.DefinePlugin({
            'window.MY_NAME': JSON.stringify('Artyom'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        })
    ]
};

module.exports = config;

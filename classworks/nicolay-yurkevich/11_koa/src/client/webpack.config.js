const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.join(__dirname, './'),

  entry: {index: ['./index.js'], list: ['./reviews.js']},

  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js'],
    modules: ['./', 'node_modules'],
  },

  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'reviews.html',
      template: 'reviews.html',
    })
  ]
}

module.exports = config;

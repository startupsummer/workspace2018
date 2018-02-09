const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['web/client/index.js'],
    reviews: ['web/client/reviews.js']
  },

  output: {
    path: `${__dirname}/static/`,
    publicPath: '/static/',
    filename: '[name].js',
  },

  context: path.resolve(__dirname, './'),

  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //     },
  //   ],
  // },

  devtool: 'source-map',

  resolve: {
    modules: ['./', 'node_modules'],
    extensions: ['.js', '.jsx', '.pcss'],
    alias: {
      joi: 'joi-browser',
    },
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, 'web/client/index.html'),
  //     filename: 'views/index.html',
  //   }),
  // ],
};

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.join(__dirname, './'),

  entry: [
    './index.js',
    './reviews.js'
  ],

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.css'],
    modules: ['./', 'node_modules'],
  },

  // devtool: 'cheap-source-map',

  output: {
    // path: path.join(__dirname, './public'),
    path: __dirname,
    filename: '[name].js',
    publicPath: '/'
    // publicPath: '/public'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // inject: 'false'
    }),
    new HtmlWebpackPlugin({
      filename: 'reviews.html',
      template: 'reviews.html',
      // inject: 'false'
    })
  ]
}

module.exports = config;

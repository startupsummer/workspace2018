const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.join(__dirname, './'),

  entry: [
    './index.js',
    // 'reviews': ['./reviews.js']
  ],

  mode: 'development',

  output: {
    path: path.join(__dirname, './public'),
    // path: __dirname + '/public'),
    filename: '[name].js',
    publicPath: '/'
  },

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

  plugins: [
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      template: 'index.html'
    })
    // new HtmlWebpackPlugin({
    //   filename: 'rewievs.html',
    //   template: 'rewievs.html'
    // })
  ]
}

module.exports = config;

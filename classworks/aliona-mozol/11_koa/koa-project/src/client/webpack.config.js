const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  context: path.resolve(__dirname, './'),

  entry: {
    'index': './index.js',
    'reviews': './reviews.js'
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

  output: {
    path: path.resolve('./public'),
    filename: '[name].js',
    publicPath: '/public/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: '[index]',
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html')
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: '[reviews]',
      filename: 'reviews.html',
      template: path.resolve(__dirname, './reviews.html')
    })
  ]
}

module.exports = config;

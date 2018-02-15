const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(__dirname)
const config = {
  context: path.join(__dirname, "./"),

  entry: {
    index: ['./index.js'],
    reviews: ['./reviews.js']
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader']
      }
    ]
  },

  devtool: 'cheap-source-map',

  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules', './'
    ]
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
    publicPath: '/build/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['index'],
      filename: 'index.html',
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['reviews'],
      filename: 'reviews.html',
      template: './reviews.html'
    })
  ]
}

module.exports = config

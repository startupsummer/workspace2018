const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: [
'./index.js',
'./reviews.js',
],

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

  devtool: 'cheap-source-map',

  resolve: {
    extensions: ['.js', '.css','.pcss'],
    modules: ['./', 'node_modules'],
  },

context: path.resolve(__dirname, './'),

  output: {
    path: path.resolve('./build/'),
    filename: 'scripts/[name].js',
    publicPath: '/build/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['index'],
      filename:'index.html',
      template: path.resolve(__dirname, './index.html'),
    }),

    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['reviews'],
      filename:'reviews.html',
      template: path.resolve(__dirname, './reviews.html'),
    }),

  ]
}

module.exports = config

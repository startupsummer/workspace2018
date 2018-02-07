const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: ['./index.js'],

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
    path: path.resolve('./build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ]
}

module.exports = config

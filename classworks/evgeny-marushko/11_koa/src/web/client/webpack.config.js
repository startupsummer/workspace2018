const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.join(__dirname, './'),

  entry: ['./index.js'],

  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader']
      },
    ]
  },


}

module.exports = config

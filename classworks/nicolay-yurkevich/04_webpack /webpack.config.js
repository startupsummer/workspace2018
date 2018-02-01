const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SuperTrickyPlugin = require('./SuperTrickyPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',

  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
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
    },
    {
      test: /\.pcss/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
       'window.MY_NAME': '"Nicolay Yurkevich"',
       'process.env.NODE_ENV': '"production"',
    }),
    new SuperTrickyPlugin()
  ]
}

module.exports = config
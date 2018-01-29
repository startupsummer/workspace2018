const webpack = require('webpack')
const path = require('path')

const SuperTrickyPlugin = require('./SuperTrickyPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: './src/index.js',

  module: {
    rules: [{
        test: /\p?css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })
      }, {
       test: /\.js$/,
       exclude: /(node_modules|bower_components)/,
       use: {
         loader: 'babel-loader',
       }
    }]
  },

  devtool: 'cheap-source-map',

  resolve: {
    extensions: ['.js', '.css','.pcss'],
    modules: [
      'node_modules',
      path.resolve('./src')
    ]
  },

  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'window.MY_NAME': JSON.stringify("Yegor"),
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new ExtractTextWebpackPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new SuperTrickyPlugin()
  ]
}

module.exports = config

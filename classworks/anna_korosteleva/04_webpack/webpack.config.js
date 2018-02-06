const webpack = require('webpack')
const path = require('path')

const SuperTrickyPlugin = require('./SuperTrickyPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.pcss/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
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
      'window.MY_NAME': '"ANNA"',
      'process.env.NODE_ENV': '"production"'
    }),    
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new SuperTrickyPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
}

module.exports = config

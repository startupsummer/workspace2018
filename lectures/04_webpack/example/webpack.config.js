const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './index.js'
  ],

  module: {
    rules: [
      {
        test: /\.pcss/,
        use: ['css-hot-loader', 'style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  devtool: 'cheap-source-map',

  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  },

  resolve: {
    extensions: ['.js', '.pcss'],
    modules: [
      'node_modules',
      path.resolve('./')
    ]
  },

  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextWebpackPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    })
  ]
}

module.exports = config

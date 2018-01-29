const webpack = require('webpack')
const path = require('path')

const SuperTrickyPlugin = require('./SuperTrickyPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader']
      },

      {
        test: /\.css/,
        use: ['style-loader', 'css-loader' ]
      },

      {
        test: /\.pcss/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
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
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new webpack.DefinePlugin({
        'window.MY_NAME': '"Eugene"',
        'process.env.NODE_ENV': '"production"'
    }),
    new SuperTrickyPlugin()
  ]
}

module.exports = config

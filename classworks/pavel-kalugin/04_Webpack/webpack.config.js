const webpack = require('webpack')
const path = require('path')

const SuperTrickyPlugin = require('./SuperTrickyPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

const config = {
  entry: './src/index.js',

  module: {
    rules: [
      {
	test: /\.p?css/,
	use: ExtractTextWebpackPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'postcss-loader']
      	})
	}, {
	test: /\.js/,
	use: ['babel-loader'],
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
	'window.MY_NAME': JSON.stringify('Pavel'),
	'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new SuperTrickyPlugin(),
    new ExtractTextWebpackPlugin("styles.css")
  ]
}

module.exports = config

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReloadPlugin = require('reload-html-webpack-plugin');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname,'/dist'),
};

module.exports = {
  context: PATHS.src,

  entry: `./assets/styles/index.pcss`,

  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.pcss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    hot: true,
    publicPath: '/',
    contentBase: path.join(__dirname, "src/assets"),
    watchContentBase: true
  },

  devtool: 'source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html' }),
    new ReloadPlugin(),
  ],
};

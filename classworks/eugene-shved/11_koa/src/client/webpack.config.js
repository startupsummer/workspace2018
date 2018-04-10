const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  entry: {
    'index':['./src/client/index.js'],
    'reviews':['./src/client/reviews.js'],
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
  devtool: 'cheap-source-map',

  resolve: {
    extensions: ['.js', '.css','.pcss'],
    modules: [
      'node_modules',
      path.resolve('./src')
    ]
  },

  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ["reviews"],
      filename: "reviews.html",
      template: "./src/client/reviews.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ["index"],
      filename: "index.html",
      template: "./src/client/index.html"
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'window.MY_NAME':'"Nikita"',
      'process.env.NODE_ENV':'"production"'
    }),
  ]
}

module.exports = config

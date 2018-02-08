const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    'index': './web/client/index.js',
    'reviews': './web/client/reviews.js',
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
    path: path.resolve('./build/'),
    filename: 'scripts/[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename:'index.html',
      template: path.resolve('./src/web/client/index.html'),
    }),

    new HtmlWebpackPlugin({
      chunks: ['reviews'],
      filename:'reviews.html',
      template: path.resolve('./src/web/client/reviews.html'),
    }),

  ]
}

module.exports = config

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
  context: path.join(__dirname, './'),

  entry: {index: ['./index.js'], list: ['./list.js']},

  output: {
    path: path.resolve('./build/'),
    filename: '[name].js',
    publicPath: '/public',
  },

  module: {
    rules: [
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
    extensions: ['.js', '.pcss'],
    modules: [
      'node_modules',
      './'
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'messages.html',
      template: 'messages.html',
      inject: false,
    }),
  ]
}


module.exports = config

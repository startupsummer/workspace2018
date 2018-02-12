import path from 'path';
import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default new Config().merge({
  entry: [
    'babel-polyfill',
    './src/client/index.js',
  ],
  output: {
    path: path.join(__dirname, '../../../public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'task_11',
      template: './src/client/index.html',
      inject: 'body',
    }),
  ],
});
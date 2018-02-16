import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('./src/server/config/webpack.base.config.js').merge({
  output: {
    publicPath: '/',
    filename: 'bundle.min.js',
  },
  devtool: 'source-map',
  module: {
    rules: [],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});

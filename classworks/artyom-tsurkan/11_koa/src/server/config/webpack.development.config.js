import path from 'path';
import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('./src/server/config/webpack.base.config.js').merge({
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'react-hot-loader/patch',
        path.join(__dirname, '../../client/index.js')
    ],
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
});
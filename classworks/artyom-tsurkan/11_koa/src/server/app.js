import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';

import session from 'koa-session';

import webpack from 'webpack';
import bodyParser from 'koa-bodyparser';

import historyApiFallback from 'koa2-history-api-fallback';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';

import webpackConfig from './config/webpack.config.babel';
import routes from './routes';

const PORT = process.env.PORT || 3000;
const app = new Koa();

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
};

app.use(session(CONFIG, app));

app.use(bodyParser());

app.use(routes);

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback());

  app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(serve(path.resolve('./public')));
}

app.listen(PORT, () => {
  console.log(`Web application server listening on ${PORT}, in ${process.env.NODE_ENV} mode`);
});
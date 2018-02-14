const asyncBusboy = require('async-busboy');
const bodyParser = require('koa-bodyparser');
const Joi = require('joi');
const KeyGrip = require("keygrip");
const Koa = require('koa');
const middleware = require('koa-webpack');
const Router = require('koa-router');
const session = require('koa-generic-session');
const Webpack = require('webpack');

const config = require('../client/webpack.config.js');
const app = new Koa();
const router = new Router();

app.use(middleware({ compiler: Webpack(config) }));
app.use(bodyParser({ enableTypes: ['form', 'json', 'text']}));

app.keys = new KeyGrip(['starling secret', 'another starling secret'], 'sha256');
app.use(session());

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        if (!error.statusCode) {
            ctx.status = 500;
        } else {
            ctx.status = error.statusCode;  
        }
        ctx.body = error.data;
    }
});

const schema = Joi.object().keys({
  firstName: Joi.string().regex(/^[A-z\-]+/).min(2),
  lastName: Joi.string().regex(/^[A-z\-]+/).min(2),
  description: Joi.string().regex(/^[\w\s\,\.\:\;\!\?\"\«\»\—\-]+$/).min(5),
  rating: Joi.number().integer().min(0).max(10),
});

router.get('/session-counter', async (ctx, next) => {
    let session = ctx.session;
    session.count = session.count + 1 || 0;
    ctx.body = session.count;
  });

const reviewsList = [];

router.get('/reviews-list', async (ctx, next) => {
    ctx.body = reviewsList;
  })

router.post('/api/holidays-form-data', async (ctx, next) => {
    const review = ctx.request.body;
    let validationErrorsList = [];
    Joi.validate(review, schema, {abortEarly: false}, 
        (error) => {
            if(error) {
                validationErrorsList = error.details.map(item => item.message);
            }
        });
    if (validationErrorsList.length) {
        ctx.throw(400, { data: validationErrorsList });
    }
    reviewsList.push(review);
    ctx.body = 'Done. Thank u for your review!';
});

app.use(router.routes())
app.use(router.allowedMethods());


const port = 7000;

app.listen(port, () => {
    console.log('Server Started ?http://localhost:' + port.toString());
});
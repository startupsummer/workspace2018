import Router from 'koa-router';
import Joi from 'joi';

const router = new Router();

let reviews = [
  {
    id: '1',
    name: 'Jack',
    surname: 'White',
    description: 'bla bla bla bla bla bla bla',
    rating: '8',
  },
  {
    id: '2',
    name: 'John',
    surname: 'Bacon',
    description: 'bla bla bla bla bla bla bla',
    rating: '9',
  },
];

const schema = Joi.object().keys({
  name: Joi.string(),
  surname: Joi.string().min(1).required(),
  description: Joi.string().min(3).required(),
  rating: Joi.number().integer().positive(),
});

router
    .get('/api/v1/reviews', (ctx, next) => {
      ctx.body = reviews;
    })
    .post('/api/v1/reviews', (ctx, next) => {
      const result = Joi.validate(ctx.request.body, schema);
      ctx.assert(!result.error, 400);
      ctx.request.body.id = Date.now();
      reviews.push(ctx.request.body);
      ctx.body = ctx.request.body;
    })
    .get('/api/v1/counter', (ctx, next) => {
      const count = (ctx.session.views + 1) || 0;
      ctx.session.views = count;
      ctx.body = count;
    });

export default router.routes();

/**
 *  Validate request and send 400(bad request), when request is not valid
 *
 * @param koaCtx {Object} - a koa context
 */
module.exports = async function validateRequest(ctx, validateFn) {
  ctx.errors = [];
  const data = await validateFn(ctx) || {};
  const isValid = !ctx.errors.length;

  if (!isValid) {
    ctx.body = { errors: ctx.errors };
    ctx.status = 400;
  }

  return data;
};

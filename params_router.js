const Koa = require('koa')
const Router = require('koa-router')
const app =  new Koa()
const router =  new Router({
  prefix: '/users'
})

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>router user page</h1>'
})

router.get('user', '/:id/:name', async (ctx, next) => {
    ctx.response.body = '<h1>router user page "/users/:id/:name"</h1>'
    console.log(ctx.params)
})

router.all('/*', async (ctx, next) => {
  ctx.response.status = 404
  ctx.response.body = '<h1>router 404</h1>'
})
app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})
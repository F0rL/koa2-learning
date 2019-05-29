const Koa = require('koa')
const Router = require('koa-router')
const app =  new Koa()
const router =  new Router()

// router.all('/*', async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*')
//   await next()
// })

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>router page</h1>'
})

router.get('/home', async (ctx, next) => {
  ctx.response.body = '<h1>router home page</h1>'
})

router.all('/*', async (ctx, next) => {
  ctx.response.status = 404
  ctx.response.body = '<h1>router 404</h1>'
})


// app.use(async (ctx, next) => {
//   if(ctx.request.path === '/') {
//     ctx.response.body = '<h1>index page</h1>'
//   }else {
//     await next()
//   }
// })

// app.use(async (ctx, next) => {
//   if(ctx.request.path === '/home') {
//     ctx.response.body = '<h1>home page</h1>'
//   }else {
//     await next()
//   }
// })
app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})
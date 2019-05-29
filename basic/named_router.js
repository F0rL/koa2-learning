const Koa = require('koa')
const Router = require('koa-router')
const app =  new Koa()
const router =  new Router()

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>router page</h1>'
})

router.get('user', '/user/:id', async (ctx, next) => {
  ctx.response.body = '<h1>router user page</h1>'
})
const userUrl1 = router.url('user', 3)
console.log('userUrl1: ', userUrl1)
const userUrl2 = router.url('user', {id: 4})
console.log('userUrl2: ', userUrl2)

router.all('/*', async (ctx, next) => {
  ctx.response.status = 404
  ctx.response.body = '<h1>router 404</h1>'
})
app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})
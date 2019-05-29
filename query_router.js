const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async(ctx, next) => {
  ctx.response.body = `<h1>index page</h1>`
})

router.get('/home', async(ctx, next) => {
  let query  = ctx.request.query || ''
  let qString = ctx.request.querystring || ''
  console.log(query)
  console.log(qString)
  ctx.response.body = `<h1>home page</h1>`
})

router.get('/user/:id/:name', async(ctx, next) => {
  let params = ctx.params
  console.log(params)
  ctx.response.body = `<h1>user page id:${params.id} name:${params.name}</h1>`
})



app.use(router.routes())
app.listen(3000, () => {
  console.log('server is running at http://loaclhost:3000')
})

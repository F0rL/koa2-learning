const Koa = require('koa')
const Router = require('koa-router')
//引入，处理post
const bodyParser= require('koa-bodyparser')

const app = new Koa()
const router = new Router()
app.use(bodyParser())

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


//返回表单路由
router.get('/user', async(ctx, next)=>{
  ctx.response.body = 
  `
    <form action="/user/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：kuma"/> 
      <br/>
      <input name="password" type="text" placeholder="请输入密码：123456"/>
      <br/> 
      <button>GoGoGo</button>
    </form>
  `
})
//表单响应路由
router.post('/user/register',async(ctx, next)=>{
  let {name, password} = ctx.request.body
  if( name === 'kuma' && password === '123456' ){
    ctx.response.body = `Hello， ${name}！`
  }else{
    ctx.response.body = '账号信息错误'
  }
})


app.use(router.routes())
app.listen(3000, () => {
  console.log('server is running at http://loaclhost:3000')
})

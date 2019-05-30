# koa2

使用到的npm包
## koa
基础框架

文档 https://github.com/koajs/koa
## koa-router
路由 使用 koa-router 来处理 URL
```
const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

 // 添加路由
 router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})
```

## koa-bodyparser

当用 post 方式请求时，我们会遇到一个问题：post 请求通常都会通过表单或 JSON 形式发送，而无论是 Node 还是 Koa，都 没有提供 解析 post 请求参数的功能。

对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中。
```
var Koa = require('koa');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body;
});
```

文档 https://github.com/koajs/bodyparser

## koa-nunjucks-2
模板引擎是为了使用户界面与业务数据分离而产生的，可以生成特定格式的文档。例如，用于网站的模板引擎会生成一个标准的 HTML 文档。

市面上常见的模板引擎很多，例如：Smarty、Jade、Ejs、Nunjucks 等，可以根据个人喜好进行选择。koa-views、koa-nunjucks-2 等支持 Koa 的第三方中间件也可以自行选择。
```
const Koa = require('koa');
const app = new Koa();
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');

app.use(koaNunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}));

app.use(async (ctx) => {
  await ctx.render('home', {double: 'rainbow'});
});
```
文档 https://github.com/strawbrary/koa-nunjucks-2

## koa-static
处理静态资源
```
  const Koa = require('koa')
  const path = require('path')
  const bodyParser = require('koa-bodyparser')
  const nunjucks = require('koa-nunjucks-2')
  // 引入 koa-static
  const staticFiles = require('koa-static')

  const app = new Koa()
  const router = require('./router')

  // 指定 public目录为静态资源目录，用来存放 js css images 等
  app.use(staticFiles(path.resolve(__dirname, "./public")))

  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));

  app.use(bodyParser())
  router(app)
  app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
  })
  ```
文档 https://github.com/koajs/static

## log4js
Log4js 是 Node.js 中一个成熟的记录日志的第三方模块

文档 https://github.com/nomiddlename/log4js-node
## nunjucks
nunjucks 工具来解析错误页面模板
## ip
获取ip

文档 https://github.com/indutny/node-ip
## nodemon
自动刷新

文档 https://github.com/remy/nodemon#nodemon

## pm2
线上部署运行的话，方法也有很多，我们推荐使用 pm2。

pm2 是一个带有负载均衡功能的Node应用的进程管理器。
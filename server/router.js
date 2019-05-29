const router = require('koa-router')()
const HomeController = require('./controller/home')
module.exports = (app) => {
  router.get( '/', HomeController.index )
  
  router.get('/home', HomeController.home)
  
  router.get('/home/:id/:name', HomeController.homeParams)
  
  router.get('/user', HomeController.login)
  
  router.post('/user/register', HomeController.register)
  
  app.use(router.routes())
    .use(router.allowedMethods())
  //.allowedMethods处理的业务是当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头.
}
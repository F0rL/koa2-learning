const HomeService = require("../service/home");

module.exports = {
  index: async (ctx, next) => {
    await ctx.render("home/index", {title: "kuma欢迎您"})
  },
  home: async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.send({status: '200'})
    // ctx.response.body = "<h1>HOME page</h1>";
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = "<h1>HOME page /:id/:name</h1>";
  },
  login: async (ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GoGoGo'
    })
  },
  register: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    let res = await HomeService.register(name, password);
    console.log(res)
    if(res.status === -1){
      console.log('error')
      await ctx.render('home/login', res.data)
    }else {
      console.log('success')
      ctx.state.title = '个人中心',
      await ctx.render('home/success', res.data)
    };
  }
};

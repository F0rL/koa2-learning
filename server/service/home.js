//这一级的分层非必须
//如果想要把 node 作为真正的后端去操作数据库等，建议再分出一层 service，用于处理数据层面的交互.
//比如调用 model 处理数据库，调用第三方接口等，而controller 里面只做一些简单的参数处理。
module.exports = {
  register: async(name, pwd) => {
    let data 
    if (name == 'kuma' && pwd == '123456') {
      data = `Hello， ${name}！`
    } else {
      data = '账号信息错误'
    }
    return data
  }
}
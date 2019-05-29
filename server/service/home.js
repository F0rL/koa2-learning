//这一级的分层非必须
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
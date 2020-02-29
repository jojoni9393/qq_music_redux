//npm install http-proxy-middleware --save
// 你无需在任何位置导入此文件。 它在启动开发服务器时会自动注册。
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy('/api', {
      //target 真实服务器地址
      //会与url进行拼接
      //如发请求url:'/api/xxx'
      //'http://localhost:8080/api/xxx'
      target: 'https://u.y.qq.com',

      //服务器虚拟机搭建，一般设置为true
      changeOrigin: true,

      //如果真实url:'/xxx',不是'/api'开头，需要配置该项
      //自己先加上url:'/api/xxx'
      //pathRewrite路径重写通过正则自动去掉api
      //如果接口中有api 这样写 {'^/api': '/api'}，
      //如果接口中没有api  {'^/api': ''  }
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}

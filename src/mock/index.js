
if(process.env.MODE_ENV !== 'production') {
  const Mock = require('mockjs')
  require('./services/user')
  require('./services/task')
  require('./services/business')
  require('./services/proManagement')
  Mock.setup({ // 指定被拦截的 ajax 请求的响应时间
    timeout: 800
  })
}

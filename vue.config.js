/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 16:38:59
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-13 16:17:22
 */
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 定义更目录
const BASE_URL = process.env.ENV = 'production' ? '/' : './'

module.exports = {
  publicPath: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 这里写调用接口的基础路径，来解决跨域
  devServer: {
    open: true, // 自动打开浏览器
    proxy: {
        '/iv-api': {
            target: 'https://www.fastmock.site/mock/1ed3d3fda7e1f649404a237825bf7e94/api/',
            // 默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true 以覆盖此行为。
            changeOrigin: true,
            pathRewrite: { '^/iv-api': '' }
        }
    }
  },
}

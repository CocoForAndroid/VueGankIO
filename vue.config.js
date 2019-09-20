const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'girl', // 构建输出目录
  publicPath: './',
  // 反向代理的配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gank.io/', // 目标地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

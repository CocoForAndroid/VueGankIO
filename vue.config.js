const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/style/styl/common.styl')
      ]
    })
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
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    config.resolve.alias
      .set('@', resolve('src'))
      .set('pages', resolve('src/pages'))
      .set('style', resolve('src/style'))
      .set('components', resolve('src/components'))
  }
}

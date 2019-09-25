import axios from 'axios'
import app from './../main'
const httpRequest = axios.create()

// 根据不同环境切换不同地址
if (process.env.NODE_ENV === 'production') {
  // 生产环境
  httpRequest.defaults.baseURL = 'http://gank.io/'
} else if (process.env.NODE_ENV === 'development') {
  // 本地环境
  httpRequest.defaults.baseURL = '/api/'
}
// 设置请求超时10s
httpRequest.defaults.timeout = 1000
// 响应拦截
httpRequest.interceptors.response.use(response => {
  if (response.data.error == false) {
    return response.data
  } else {
    app.$toast('请求数据失败')
  }
}, error => {
  return Promise.reject(error)
})

export default httpRequest

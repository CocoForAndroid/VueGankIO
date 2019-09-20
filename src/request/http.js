import axios from 'axios'
import QS from 'qs'

// 根据不同环境切换不同地址
if (process.env.NODE_ENV === 'production') {
  // 生产环境
  axios.defaults.baseURL = 'http://gank.io/'
} else if (process.env.NODE_ENV === 'development') {
  // 本地环境
  axios.defaults.baseURL = '/api/'
}
// 设置请求超时10s
axios.defaults.timeout = 1000

const httpRequest = axios.create()

export default httpRequest

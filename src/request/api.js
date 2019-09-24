import httpRequest from './http'

/**
 * 获取最新一天干货
 * @return
 */
const getLatestGankData = () => {
  return httpRequest.request({
    url: 'api/today'
  })
}
/**
 * 获取闲读
 * @return
 */
const getXianDuCategory = () => {
  return httpRequest.request({
    url: 'api/xiandu/categories'
  })
}
/**
 * 获取闲读子分类
 * @param name 不同子分类
 *
 */
const getXianDuChild = (name = 'android') => {
  return httpRequest.request({
    url: `api/xiandu/categories/${name}`
  })
}
/**
 * 获取闲读数据
 * @param page
 * @param count
 * @param id 子分类返回来的id
 */
const getXianDuList = (page, count, id) => {
  return httpRequest.request({
    url: `api/xiandu/data/id/${id}/count/${count}/page/${page}`
  })
}
/**
 *
 * @param type 类型(福利,android.ios等)
 * @param pageSize 数量
 * @param page 页数
 */
const getCategoriesList = (type, pageSize, page) => {
  return httpRequest.request({
    url: `api/data/${type}/${pageSize}/${page}`
  })
}
export {
  getLatestGankData,
  getXianDuCategory,
  getXianDuChild,
  getXianDuList,
  getCategoriesList
}

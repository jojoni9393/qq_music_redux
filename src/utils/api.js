//if (!isAuth()) return
//对需要 token 的请求，请求前本地先进行判断
//如果本地没有 token 的，直接return，不在就行请求

import axios from 'axios'
import { BASE_URL } from './url'
import { getToken, removeToken } from './token'

// 创建axios实例，添加基路径
const API = axios.create({
  baseURL: BASE_URL
})

// 添加请求拦截器
API.interceptors.request.use(config => {
  //解构处请求地址
  config.headers.authorization = getToken()
  const { url } = config
  if (
    //判断请求地址是否是 /user 开头
    url.startsWith('/user') &&
    //过滤掉/user开头，但是又不需要token的路径
    !url.startsWith('/user/registered') &&
    !url.startsWith('/user/login')
  ) {
    //请求头添加token
  }
  //将处理后的 config 返回
  return config
})

// 添加响应拦截器
API.interceptors.response.use(res => {
  // console.log(res)
  if (res.data.status === 400) {
    // token 失效，直接移除 token
    removeToken()
  }
  //将处理后的 res 返回
  return res
})

export { API }

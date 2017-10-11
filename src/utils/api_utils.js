import reqwest from 'reqwest'
import { getLocalStorage } from './util'

export const ajax = (params) => {
  console.log('请求API=',params)
  /**
   * @url 请求地址(必填)
   * @type  json数据类型
   * @method  请求类型
   **/
   return new Promise((resolve, reject) => {
     reqwest({
       method : 'GET',
       ...params
     }).then(res => {
       resolve(res)
     }, e => {
       let errorJSON = ''
       try {
         errorJSON = JSON.parse(e.response)
       } catch (e) {
         errorJSON = e.response
       }

       const message = typeof errorJSON === 'string' ? errorJSON : ((errorJSON._error && errorJSON._error.message) || '')
       if (message) {

       }
       reject(e)
     })
   })
}

export const getHeader = (obj) => {
  let header = {
    'Accept' : 'application/json',
    ...obj
  }
  
  const user_token = getLocalStorage('user_token')
  const wechat_token = getLocalStorage('wechat_token')
  if (user_token) {
    header['Authorization'] = `Bearer ${user_token}`
  }

  if (wechat_token) {
    header['Wx-Authorization'] = `${wechat_token}`
  }

  return header
}

export const normal_ajax = (url, data = {}, method) => ajax({
  url,
  method,
  data : data.data || {},
  headers : getHeader(data.header || {})
})

export const apiGET    = (url, data) => normal_ajax(url, data, 'GET')

export const apiPOST   = (url, data) => normal_ajax(url, data, 'POST')

export const apiPUT    = (url, data) => normal_ajax(url, data, 'PUT')

export const apiDELETE = (url, data) => normal_ajax(url, data, 'DELETE')
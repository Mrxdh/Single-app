import { apiGET, apiPOST, apiPUT, apiDELETE } from './api_utils'

const urlScheme = 'https'

const BASE_URL = `${urlScheme}://devapi.kuban.io`

const APP_BASE_API = `${BASE_URL}/api/v1`

const WECHAT_BASE_API = `${BASE_URL}/wechats/v1`

// 用户登录
export const wechatSignin = (params) => apiPOST(`${WECHAT_BASE_API}/sessions/wechat_signin`, params)

// 访问事由
export const getVisitReasons = (params) => apiGET(`${APP_BASE_API}/visit_reasons`, params)
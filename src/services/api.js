//跨域代理前缀
// const API_PROXY_PREFIX='/api'
const API_PROXY_PREFIX='http://192.168.11.251:8000'
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
//const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  //LOGIN: `${BASE_URL}/login`,
  LOGIN: `${BASE_URL}/api/users/login`,
  ROUTES: `${BASE_URL}/routes`,
  GOODS: `${BASE_URL}/goods`,
  GOODS_COLUMNS: `${BASE_URL}/columns`,
}
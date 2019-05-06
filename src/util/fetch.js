import axios from 'axios'

let options = {}
/**
 *
 * @type {AxiosInstance}
 */
export let http = axios.create(options)
http.interceptors.request.use((config) => {
  if (config.method === 'get') {
    if (config.params) {
      config.params._time = +new Date()
    } else {
      config.params = {
        _time: +new Date()
      }
    }
  }
  return config
})
export default http

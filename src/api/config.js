import axios from 'axios'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 15000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
  }
)

export default axios

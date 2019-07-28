import axios from 'axios'

// axios.defaults.baseURL = 'http://10.222.232.19:8888/'
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 15000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
  }
)

export default axios

import axios from 'axios'

// axios.defaults.baseURL = 'http://10.222.232.28:8888/'
axios.defaults.baseURL = '/api'
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

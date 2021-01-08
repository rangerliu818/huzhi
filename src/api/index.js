import axios from 'axios'
import {recommend, login} from './config'

axios.defaults.timeout = 30000

// post请求头
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default {
    getRecommend () {
      return axios.get(recommend)
    },
    getLogin(data) {
      return axios.post(login,data)
    }
}


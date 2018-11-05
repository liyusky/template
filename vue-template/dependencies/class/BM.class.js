import axios from 'axios'
import Url from './url.class.js'
export default class BM {
  successCallback = null
  failCallback = null
  defaultCallback = null
  static send (args) {
    let instance = new BM()
    // let headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    args.data = args.data ? args.data : {}
    axios({
      url: Url[args.url],
      method: 'post',
      baseURL: 'https://www.jiebayidai.com:9595',
      // baseURL: 'http://101.37.27.97:8099',
      // headers: headers,
      params: args.data
    }).then(response => {
      instance.dispense(response.data)
      if (instance.defaultCallback) instance.defaultCallback()
    }).catch(() => {
      if (instance.defaultCallback) instance.defaultCallback()
    })
    return instance
  }
  dispense (response) {
    console.log(response)
    if (typeof response === 'string') {
      if (this.successCallback) {
        this.successCallback(response)
      }
    } else {
      switch (response.resp_code) {
        case '0000':
          if (this.successCallback) this.successCallback(response)
          break
        default:
          window.modal.$store.commit('saveError', {
            modal: true,
            message: response.resp_desc
          })
          if (this.failCallback) this.failCallback(response)
      }
    }
  }
  success (callback) {
    this.successCallback = callback
    return this
  }
  fail (callback) {
    this.failCallback = callback
    return this
  }
  default (callback) {
    this.defaultCallback = callback
    return this
  }
}

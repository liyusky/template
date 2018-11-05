export default class Router {
  static unauthorized = ['account-balance', 'my-bank-card']
  static certification = ['add-contact', 'bind-bank-card', 'zhima-credit', 'identity-verification', 'operator-credit']
  static mine = ['credit', 'settings']
  static borrow = ['wanna-borrow']
  static complain = ['complain']
  static mark () {
    window.app.$store.commit('saveOrigin', window.app._route)
  }

  static push (params) {
    this.mark()
    if (typeof params === 'string') {
      params = {
        name: params
      }
    }
    if (this.unauthorized.includes(params.name)) {
      if (!window.app.$store.state.account.certification.bank) {
        params = {
          name: 'credit'
        }
      }
    }
    window.app.$router.push(params)
  }

  static back () {
    // let origin = null
    let params = null
    let page = window.app._route
    console.log(page)
    console.log(window.app.$store.state.origin)
    if (this.certification.includes(page.name)) {
      params = {
        name: 'credit'
      }
    }
    if (this.mine.includes(page.name)) {
      params = {
        name: 'mine'
      }
    }
    if (this.borrow.includes(page.name)) {
      params = {
        name: 'index'
      }
    }
    if (this.complain.includes(page.name)) {
      params = {
        name: 'index'
      }
    }
    if (params) {
      window.app.$router.push(params)
    } else {
      window.app.$router.back()
    }
    // origin = window.app.$store.state.origin
    // params = {...origin}
  }
}

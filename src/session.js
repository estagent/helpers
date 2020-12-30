const now = () => new Date().getTime()

export default {
  startedAt: function () {
    return this.get('startedAt')
  },
  seconds: function () {
    return now() - this.startedAt()
  },
  clear: function () {
    console.log('session cleared!')
    sessionStorage.clear()
    return this
  },
  renew: function () {
    return this.clear().set('startedAt', now())
  },
  set: function (key, val) {
    sessionStorage.setItem(key, val)
    return this
  },
  remove: function (key) {
    sessionStorage.removeItem(key)
    return this
  },
  get: function (key) {
    return sessionStorage.getItem(key)
  },
  init: function () {
    if (!this.startedAt()) this.renew()

    return this
  },
}

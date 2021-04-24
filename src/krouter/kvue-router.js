import view from './krouter-view'
import Vue from 'vue'

class KVueRouter {
  constructor(options) {
    this.$options = options

    Vue.utils.defineReactive(this, 'current', '/')

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }

  onHashChange() {
    this.current = window.location.href.slice(1)
  }
}



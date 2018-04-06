// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueAxiosPlugin from 'vue-axios-plugin'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const checkStatus = (response) => {
  if (response.status === 404) {
    // do something
  }
  if (response.status === 500) {
    // do something
  }

  // after your uniform request handler, you must return response
  return response
}

Vue.use(VueAxiosPlugin, {
  checkStatus: checkStatus
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

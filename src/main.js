import Vue from 'vue'
import App from './App.vue'
import router from './router'
import httpcommon from "./http-common.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$http = httpcommon;

httpcommon.defaults.timeout = 10000;
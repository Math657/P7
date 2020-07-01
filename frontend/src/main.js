import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'

// Axios.defaults.withCredentials = true
Vue.prototype.$http = Axios

// config de base axios avec localhost 3000 / ...
// path '/' lors de création cookie



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

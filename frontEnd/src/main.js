import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import login from './views/login'
import systemIndex from './views/systemIndex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  login,
  systemIndex,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/style/reset.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: require('@/assets/img/img_load_fail.png'),
  loading: require('@/assets/img/img_loading.gif')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

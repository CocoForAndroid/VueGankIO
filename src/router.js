import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        keepAlive: true
      },
      component: () => import('./pages/home/Home.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('./pages/preview/PreviewImage.vue')
    }
  ]
})

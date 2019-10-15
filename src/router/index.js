import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Display from '@/views/display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'display',
      component: Display
    }
  ]
})

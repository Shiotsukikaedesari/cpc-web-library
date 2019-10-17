import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Display from '@/views/display'
import Components from '@/views/components'
import Guide from '@/views/guide'

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
      component: Display,
      redirect: '/guide',
      children: [
        {
          path: '/components',
          name: 'components',
          component: Components
        },
        {
          path: '/guide',
          name: 'guide',
          component: Guide
        }
      ]
    }
  ]
})

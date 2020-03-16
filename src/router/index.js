import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Display from '@/views/display'

import Three3D from './router-three'

import Components from './router-components'
import Guide from './router-guide'
import Notes from './router-notes'
import Effect from './router-effect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/three/shapeGeometry',
      children: Three3D
    },
    {
      path: '/display',
      name: 'display',
      component: Display,
      redirect: '/guide/intro',
      children: [
        Components,
        Guide,
        Notes,
        Effect
      ]
    },
    {
      path: '*',
      name: '404',
      redirect: '/'
      // component: Index
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Display from '@/views/display'
import Components from '@/views/components'

import UseExplain from '@/views/components/use-explain'

import Guide from '@/views/guide'
import GuideIntro from '@/views/guide/guide-intro'
import GuideShowMarkdown from '@/views/guide/guide-showMarkdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/'
    },
    // {
    //   path: '/',
    //   name: 'display',
    //   component: Display
    // },
    {
      path: '/display',
      name: 'display',
      component: Display,
      redirect: '/guide/intro',
      children: [
        {
          path: '/components',
          name: 'components',
          component: Components,
          children: [
            {
              path: '/components/use-explain',
              name: 'use-explain',
              component: UseExplain
            }
          ]
        },
        {
          path: '/guide',
          name: 'guide',
          component: Guide,
          redirect: '/guide/intro',
          children: [
            {
              path: '/guide/intro',
              name: 'guide-intro',
              component: GuideIntro
            },
            {
              path: '/guide/showMarkdown',
              name: 'guide-showMarkdown',
              component: GuideShowMarkdown
            }
          ]
        }
      ]
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

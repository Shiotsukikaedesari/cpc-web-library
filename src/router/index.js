import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Display from '@/views/display'
import Components from '@/views/components'
import Notes from '@/views/notes'

import UseExplain from '@/views/components/use-explain/use-explain'
import ComponentsDemo from '@/views/components/demo/demo'

import Guide from '@/views/guide'
import GuideIntro from '@/views/guide/intro/intro'
import GuideShowMarkdown from '@/views/guide/showMarkdown/showMarkdown'

import NotesIntro from '@/views/notes/intro/intro'
import HtmlBase from '@/views/notes/html/html-base/html-base'

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
            },
            {
              path: '/components/demo',
              name: 'components-demo',
              component: ComponentsDemo
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
        },
        {
          path: '/notes',
          name: 'notes',
          component: Notes,
          redirect: '/notes/intro',
          children: [
            {
              path: '/notes/intro',
              name: 'notes-intro',
              component: NotesIntro
            },
            {
              path: '/notes/html-base',
              name: 'html-base',
              component: HtmlBase
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


import Components from '@/views/components'
import UseExplain from '@/views/components/use-explain/use-explain'
import ComponentsDemo from '@/views/components/demo/demo'
import Intro from '@/views/components/intro/intro'

export default
{
  path: '/components',
  name: 'components',
  redirect: '/components/intro',
  component: Components,
  children: [
    {
      path: '/components/intro',
      name: 'components-intro',
      component: Intro
    },
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
}

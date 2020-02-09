
import Components from '@/views/components'
import UseExplain from '@/views/components/use-explain/use-explain'
import ComponentsDemo from '@/views/components/demo/demo'
import Intro from '@/views/components/intro/intro'
import Icon from '@/views/components/icon/icon'
import Button from '@/views/components/button/button'
import messagePopup from '@/views/components/message-popup/message-popup'

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
    },
    {
      path: '/components/icon',
      name: 'components-icon',
      component: Icon
    },
    {
      path: '/components/button',
      name: 'components-button',
      component: Button
    },
    {
      path: '/components/message-popup',
      name: 'components-message-popup',
      component: messagePopup
    }
  ]
}

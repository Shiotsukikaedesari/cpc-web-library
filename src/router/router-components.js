
import Components from '@/views/components'
import UseExplain from '@/views/components/use-explain/use-explain'
import ComponentsDemo from '@/views/components/demo/demo'

export default
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
}

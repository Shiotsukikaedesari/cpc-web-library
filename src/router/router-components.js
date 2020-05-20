
const Components = () => import('@/views/components')
const UseExplain = () => import('@/views/components/use-explain/use-explain')
const ComponentsDemo = () => import('@/views/components/demo/demo')
const Intro = () => import('@/views/components/intro/intro')
const Icon = () => import('@/views/components/icon/icon')
const Button = () => import('@/views/components/button/button')
const MessageReminder = () => import('@/views/components/message-reminder/message-reminder')
const DragPlane = () => import('@/views/components/drag-plane/drag-plane')

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
      name: 'components-buttonconst',
      component: Button
    },
    {
      path: '/components/message-reminder',
      name: 'components-message-reminder',
      component: MessageReminder
    },
    {
      path: '/components/drag-plane',
      name: 'components-drag-plane',
      component: DragPlane
    }
  ]
}

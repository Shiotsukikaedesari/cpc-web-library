const Components = () => import('@/views/components')
const Button = () => import('@/views/components/button/button')
const Demo = () => import('@/views/components/demo/demo')
const DragPlane = () => import('@/views/components/drag-plane/drag-plane')
const Icon = () => import('@/views/components/icon/icon')
const Intro = () => import('@/views/components/intro/intro')
const MessageReminder = () => import('@/views/components/message-reminder/message-reminder')
const UseExplain = () => import('@/views/components/use-explain/use-explain')

export default
{
  path: '/components',
  name: 'components',
  component: Components,
  redirect: '/components/intro',
  children: [
    {
      path: '/components/button',
      name: 'button',
      component: Button
    },
    {
      path: '/components/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/components/drag-plane',
      name: 'drag-plane',
      component: DragPlane
    },
    {
      path: '/components/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/components/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/components/message-reminder',
      name: 'message-reminder',
      component: MessageReminder
    },
    {
      path: '/components/use-explain',
      name: 'use-explain',
      component: UseExplain
    }
  ]
}

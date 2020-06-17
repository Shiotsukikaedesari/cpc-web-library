const Style = () => import('@/views/style')
const Groove = () => import('@/views/style/groove/groove')
const Intro = () => import('@/views/style/intro/intro')
const Relief = () => import('@/views/style/relief/relief')

export default
{
  path: '/style',
  name: 'style',
  component: Style,
  redirect: '/style/intro',
  children: [
    {
      path: '/style/groove',
      name: 'groove',
      component: Groove
    },
    {
      path: '/style/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/style/relief',
      name: 'relief',
      component: Relief
    }
  ]
}

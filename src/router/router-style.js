const Style = () => import('@/views/style')
const StyleIntro = () => import('@/views/style/intro/intro')
const StyleRelief = () => import('@/views/style/relief/relief')
const StyleGroove = () => import('@/views/style/groove/groove')

export default
{
  path: '/style',
  name: 'style',
  component: Style,
  redirect: '/style/intro',
  children: [
    {
      path: '/style/intro',
      name: 'style-intro',
      component: StyleIntro
    },
    {
      path: '/style/relief',
      name: 'style-relief',
      component: StyleRelief
    },
    {
      path: '/style/groove',
      name: 'style-groove',
      component: StyleGroove
    }
  ]
}

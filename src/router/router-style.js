const Style = () => import('@/views/style')
const StyleIntro = () => import('@/views/style/intro/intro')
const StyleRelief = () => import('@/views/style/relief/relief')

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
    }
  ]
}

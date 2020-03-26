import Style from '@/views/style'
import StyleIntro from '@/views/style/intro/intro'
import StyleRelief from '@/views/style/relief/relief'

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

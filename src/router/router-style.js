import Style from '@/views/style'
import StyleIntro from '@/views/style/intro/intro'

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
    }
  ]
}

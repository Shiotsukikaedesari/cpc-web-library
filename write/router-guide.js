const Guide = () => import('@/views/guide')
const About = () => import('@/views/guide/about/about')
const DesignPrinciple = () => import('@/views/guide/design-principle/design-principle')
const Intro = () => import('@/views/guide/intro/intro')
const ShowMarkdown = () => import('@/views/guide/showMarkdown/showMarkdown')

export default
{
  path: '/guide',
  name: 'guide',
  component: Guide,
  redirect: '/guide/intro',
  children: [
    {
      path: '/guide/about',
      name: 'about',
      component: About
    },
    {
      path: '/guide/design-principle',
      name: 'design-principle',
      component: DesignPrinciple
    },
    {
      path: '/guide/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/guide/showMarkdown',
      name: 'showMarkdown',
      component: ShowMarkdown
    }
  ]
}

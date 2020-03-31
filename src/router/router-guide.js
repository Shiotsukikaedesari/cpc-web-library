const Guide = () => import('@/views/guide')
const GuideIntro = () => import('@/views/guide/intro/intro')
const GuideShowMarkdown = () => import('@/views/guide/showMarkdown/showMarkdown')
const GuideDesignPrinciple = () => import('@/views/guide/design-principle/design-principle')
const GuideAbout = () => import('@/views/guide/about/about')
export default
{
  path: '/guide',
  name: 'guide',
  component: Guide,
  redirect: '/guide/intro',
  children: [
    {
      path: '/guide/intro',
      name: 'guide-intro',
      component: GuideIntro
    },
    {
      path: '/guide/showMarkdown',
      name: 'guide-showMarkdown',
      component: GuideShowMarkdown
    },
    {
      path: '/guide/design-principle',
      name: 'guide-design-principle',
      component: GuideDesignPrinciple
    },
    {
      path: '/guide/about',
      name: 'guide-about',
      component: GuideAbout
    }
  ]
}

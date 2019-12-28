import Guide from '@/views/guide'
import GuideIntro from '@/views/guide/intro/intro'
import GuideShowMarkdown from '@/views/guide/showMarkdown/showMarkdown'
import GuideAbout from '@/views/guide/about/about'
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
      path: '/guide/about',
      name: 'guide-about',
      component: GuideAbout
    }
  ]
}

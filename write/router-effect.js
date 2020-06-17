const Effect = () => import('@/views/effect')
const Carousel = () => import('@/views/effect/carousel/carousel')
const Intro = () => import('@/views/effect/intro/intro')
const Loading = () => import('@/views/effect/loading/loading')

export default
{
  path: '/effect',
  name: 'effect',
  component: Effect,
  redirect: '/effect/intro',
  children: [
    {
      path: '/effect/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/effect/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/effect/loading',
      name: 'loading',
      component: Loading
    }
  ]
}

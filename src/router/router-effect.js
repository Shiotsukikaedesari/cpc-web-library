const Effect = () => import('@/views/effect')
const EffectIntro = () => import('@/views/effect/intro/intro')
const EffectLoading = () => import('@/views/effect/loading/loading')
const EffectCarousel = () => import('@/views/effect/carousel/carousel')
export default
{
  path: '/effect',
  name: 'effect',
  component: Effect,
  redirect: '/effect/intro',
  children: [
    {
      path: '/effect/intro',
      name: 'effect-intro',
      component: EffectIntro
    },
    {
      path: '/effect/loading',
      name: 'effect-loading',
      component: EffectLoading
    },
    {
      path: '/effect/carousel',
      name: 'effect-carousel',
      component: EffectCarousel
    }
  ]
}

import Effect from '@/views/effect'
import EffectIntro from '@/views/effect/intro/intro'
import EffectLoading from '@/views/effect/loading/loading'
import EffectCarousel from '@/views/effect/carousel/carousel'
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

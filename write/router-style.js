const Style = () => import('@/views/style.vue')
const Groove = () => import('@/views/style/groove/groove.vue')
const Intro = () => import('@/views/style/intro/intro.vue')
const Relief = () => import('@/views/style/relief/relief.vue')

export default
{
  path: 'style',
  name: 'style',
  component: Style,
  redirect: '/style/intro',
  children: [
    {
      path: '/style/groove/groove.vue',
      name: 'groove',
      component: Groove
    },
    {
      path: '/style/intro/intro.vue',
      name: 'intro',
      component: Intro
    },
    {
      path: '/style/relief/relief.vue',
      name: 'relief',
      component: Relief
    }
  ]
}

const Notes = () => import('@/views/notes.vue')
const gulpBase = () => import('@/views/notes/gulp/gulp-base/gulp-base.vue')
const gulpSenior = () => import('@/views/notes/gulp/gulp-senior/gulp-senior.vue')
const htmlBase = () => import('@/views/notes/html/html-base/html-base.vue')
const htmlTreasure = () => import('@/views/notes/html/html-treasure/html-treasure.vue')
const Intro = () => import('@/views/notes/intro/intro.vue')
const nodeJSBase = () => import('@/views/notes/nodeJS/nodeJS-base/nodeJS-base.vue')
const nodeJSPlugins = () => import('@/views/notes/nodeJS/nodeJS-plugins/nodeJS-plugins.vue')
const nodeJSSenior = () => import('@/views/notes/nodeJS/nodeJS-senior/nodeJS-senior.vue')
const webpackBase = () => import('@/views/notes/webpack/webpack-base/webpack-base.vue')
const webpackSenior = () => import('@/views/notes/webpack/webpack-senior/webpack-senior.vue')

export default
{
  path: 'notes',
  name: 'notes',
  component: Notes,
  redirect: '/notes/intro',
  children: [
    {
      path: '/notes/gulp/gulp-base/gulp-base.vue',
      name: 'gulp-base',
      component: gulpBase
    },
    {
      path: '/notes/gulp/gulp-senior/gulp-senior.vue',
      name: 'gulp-senior',
      component: gulpSenior
    },
    {
      path: '/notes/html/html-base/html-base.vue',
      name: 'html-base',
      component: htmlBase
    },
    {
      path: '/notes/html/html-treasure/html-treasure.vue',
      name: 'html-treasure',
      component: htmlTreasure
    },
    {
      path: '/notes/intro/intro.vue',
      name: 'intro',
      component: Intro
    },
    {
      path: '/notes/nodeJS/nodeJS-base/nodeJS-base.vue',
      name: 'nodeJS-base',
      component: nodeJSBase
    },
    {
      path: '/notes/nodeJS/nodeJS-plugins/nodeJS-plugins.vue',
      name: 'nodeJS-plugins',
      component: nodeJSPlugins
    },
    {
      path: '/notes/nodeJS/nodeJS-senior/nodeJS-senior.vue',
      name: 'nodeJS-senior',
      component: nodeJSSenior
    },
    {
      path: '/notes/webpack/webpack-base/webpack-base.vue',
      name: 'webpack-base',
      component: webpackBase
    },
    {
      path: '/notes/webpack/webpack-senior/webpack-senior.vue',
      name: 'webpack-senior',
      component: webpackSenior
    }
  ]
}

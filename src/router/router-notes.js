const Notes = () => import('@/views/notes')
const GulpBase = () => import('@/views/notes/gulp/gulp-base/gulp-base')
const GulpSenior = () => import('@/views/notes/gulp/gulp-senior/gulp-senior')
const HtmlBase = () => import('@/views/notes/html/html-base/html-base')
const HtmlTreasure = () => import('@/views/notes/html/html-treasure/html-treasure')
const Intro = () => import('@/views/notes/intro/intro')
const LinuxBase = () => import('@/views/notes/linux/linux-base/linux-base')
const NodeJSBase = () => import('@/views/notes/nodeJS/nodeJS-base/nodeJS-base')
const NodeJSPlugins = () => import('@/views/notes/nodeJS/nodeJS-plugins/nodeJS-plugins')
const NodeJSSenior = () => import('@/views/notes/nodeJS/nodeJS-senior/nodeJS-senior')
const PuzzleMutationObserver = () => import('@/views/notes/puzzle/puzzle-mutationObserver/puzzle-mutationObserver')
const ViteBase = () => import('@/views/notes/vite/vite-base/vite-base')
const Vue3Base = () => import('@/views/notes/vue/vue3-base/vue3-base')
const WebpackBase = () => import('@/views/notes/webpack/webpack-base/webpack-base')
const WebpackSenior = () => import('@/views/notes/webpack/webpack-senior/webpack-senior')

export default
{
  path: '/notes',
  name: 'notes',
  component: Notes,
  redirect: '/notes/intro',
  children: [
    {
      path: '/notes/gulp-base',
      name: 'gulp-base',
      component: GulpBase
    },
    {
      path: '/notes/gulp-senior',
      name: 'gulp-senior',
      component: GulpSenior
    },
    {
      path: '/notes/html-base',
      name: 'html-base',
      component: HtmlBase
    },
    {
      path: '/notes/html-treasure',
      name: 'html-treasure',
      component: HtmlTreasure
    },
    {
      path: '/notes/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/notes/linux-base',
      name: 'linux-base',
      component: LinuxBase
    },
    {
      path: '/notes/nodeJS-base',
      name: 'nodeJS-base',
      component: NodeJSBase
    },
    {
      path: '/notes/nodeJS-plugins',
      name: 'nodeJS-plugins',
      component: NodeJSPlugins
    },
    {
      path: '/notes/nodeJS-senior',
      name: 'nodeJS-senior',
      component: NodeJSSenior
    },
    {
      path: '/notes/puzzle-mutationObserver',
      name: 'puzzle-mutationObserver',
      component: PuzzleMutationObserver
    },
    {
      path: '/notes/vite-base',
      name: 'vite-base',
      component: ViteBase
    },
    {
      path: '/notes/vue3-base',
      name: 'vue3-base',
      component: Vue3Base
    },
    {
      path: '/notes/webpack-base',
      name: 'webpack-base',
      component: WebpackBase
    },
    {
      path: '/notes/webpack-senior',
      name: 'webpack-senior',
      component: WebpackSenior
    }
  ]
}

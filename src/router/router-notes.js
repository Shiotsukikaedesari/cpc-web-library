const Notes = () => import('@/views/notes')
const NotesIntro = () => import('@/views/notes/intro/intro')
const HtmlBase = () => import('@/views/notes/html/html-base/html-base')
const HtmlTreasure = () => import('@/views/notes/html/html-treasure/html-treasure')
const WebpackBase = () => import('@/views/notes/webpack/webpack-base/webpack-base')
const WebpackSenior = () => import('@/views/notes/webpack/webpack-senior/webpack-senior')
const GulpBase = () => import('@/views/notes/gulp/gulp-base/gulp-base')
const GulpSenior = () => import('@/views/notes/gulp/gulp-senior/gulp-senior')
const NodeJSBase = () => import('@/views/notes/nodeJS/nodeJS-base/nodeJS-base')
const NodeJSSenior = () => import('@/views/notes/nodeJS/nodeJS-senior/nodeJS-senior')
export default
{
  path: '/notes',
  name: 'notes',
  component: Notes,
  redirect: '/notes/intro',
  children: [
    {
      path: '/notes/intro',
      name: 'notes-intro',
      component: NotesIntro
    },
    {
      path: '/notes/html-base',
      name: 'html-base',
      component: HtmlBase
    },
    {
      path: '/notes/html-treasure',
      name: 'html-teasure',
      component: HtmlTreasure
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
    },
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
      path: '/notes/nodeJS-base',
      name: 'nodeJS-base',
      component: NodeJSBase
    },
    {
      path: '/notes/nodeJS-senior',
      name: 'nodeJS-senior',
      component: NodeJSSenior
    }
  ]
}

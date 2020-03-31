const Notes = () => import('@/views/notes')
const NotesIntro = () => import('@/views/notes/intro/intro')
const HtmlBase = () => import('@/views/notes/html/html-base/html-base')
const HtmlTreasure = () => import('@/views/notes/html/html-treasure/html-treasure')
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
    }
  ]
}

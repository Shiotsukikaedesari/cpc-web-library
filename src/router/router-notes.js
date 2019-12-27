import Notes from '@/views/notes'
import NotesIntro from '@/views/notes/intro/intro'
import HtmlBase from '@/views/notes/html/html-base/html-base'
import HtmlTreasure from '@/views/notes/html/html-treasure/html-treasure'
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

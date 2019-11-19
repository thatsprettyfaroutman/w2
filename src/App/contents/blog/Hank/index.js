import importedComponent from 'react-imported-component'
import image from './hank.png'

export default {
  title: 'We Do Wunders — Hank, Team Lead aka Lassie',
  author: {
    name: 'Hank',
    title: 'Team lead'
  },
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 3,
  keywords: 'culture, Wunderdogs',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}

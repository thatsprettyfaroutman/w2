import importedComponent from 'react-imported-component'

export default {
  title: 'We Do Wunders — Hank, Team Lead aka Lassie',
  author: 'Hank',
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 3,
  keywords: 'culture, Wunderdogs',
  category: 'biography',

  BlogComponent: importedComponent(() => import('./post')),
}
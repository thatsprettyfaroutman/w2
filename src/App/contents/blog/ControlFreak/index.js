import importedComponent from 'react-imported-component'

export default {
  title: 'I had a problem: I’m a control freak and I think I like it',
  author: 'Manu',
  publishDate: 'April 1, 2019',
  readTimeMinutes: 2,
  keywords: 'javascript, HTTP, problem solving',
  category: 'problem/solution',

  BlogComponent: importedComponent(() => import('./post')),
}

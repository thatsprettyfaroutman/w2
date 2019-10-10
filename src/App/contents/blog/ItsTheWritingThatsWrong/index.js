import importedComponent from 'react-imported-component'
import image from './wrongwriting.png'

export default {
  title: 'I had a problem: It’s the writing that’s wrong',
  author: 'Tsuikkis',
  publishDate: 'Dec 4, 2018',
  readTimeMinutes: 4,
  keywords: 'Web Speech API, problem solving',
  category: 'problem/solution',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}

import importedComponent from 'react-imported-component'
import image from './kiti.jpg'

export default {
  title: 'We do wunders',
  author: {
    name: 'Kiti',
    title: 'Software engineer'
  },
  publishDate: 'Jun 6, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}

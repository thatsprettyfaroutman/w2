import importedComponent from 'react-imported-component'
import image from './juha-larm-design-sprint-wunderdog.jpg'

export default {
  title: 'How Lassila & Tikanoja Experimented With New Business Models Using a Design Sprint',
  author: {
    name: 'Juha Larm',
    title: 'Head of Design'
  },
  publishDate: 'March 19, 2020',
  readTimeMinutes: 7,
  keywords: 'design sprint, design, service design',
  category: 'design',
  image: image,

  content: importedComponent(() => import('./post')),
}

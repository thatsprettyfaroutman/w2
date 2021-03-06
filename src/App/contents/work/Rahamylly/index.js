import importedComponent from 'react-imported-component'
import image from './rahamylly-hero.jpg'

export default {
  title: 'Investing in a good idea',
  client: 'Rahamylly, Alexandria',
  publishDate: 'Feb 20, 2020',
  keywords: 'Full-stack development, Technology Lead',
  category: 'consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}

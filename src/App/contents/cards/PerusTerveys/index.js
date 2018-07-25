import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './perusterveys-card-thumb.jpg'
import picture from './perusterveys-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="PerusTerveys" />
    <h4>Feeling better about booking online</h4>
    <p>PerusTerveys</p>
  </Fragment>
)

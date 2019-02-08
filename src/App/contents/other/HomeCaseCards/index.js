import React, { Fragment } from 'react'
import Card from 'App/components/Card'
import {
  Futistietaja,
  Smartly,
  Oodi,
  Pexraytech,
} from 'App/contents/cards'

export default () => (
  <Fragment>
    <Card to="/Oodi">
      <Oodi/>
    </Card>
    <Card to="/smartly">
      <Smartly.io/>
    </Card>
    <Card to="/redbull">
      <Redbull/>
    </Card>
    <Card to="/pexraytech">
      <Pexraytech/>
    </Card>
  </Fragment>
)

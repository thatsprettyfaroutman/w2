import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Open positions</h1>
    <p>
      See our open positions @ recright
    </p>
    <Button to="https://www.recright.com/careers/fi/wunderdog" useAccent>
      Apply now
    </Button>
  </Fragment>
)
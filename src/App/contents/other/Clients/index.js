import React, { Fragment } from 'react'
import LogoGrid from 'App/components/LogoGrid'

import logoBarona from './logo-barona.png'
import logoLt from './logo-lt.png'
import logoPerusterveys from './logo-perusterveys.png'
import logoRedbull from './logo-redbull.png'
import logoRovio from './logo-rovio.png'
import logoSanomaPro from './logo-sanoma-pro.png'
import logoSmartly from './logo-smartly.png'
import logoYle from './logo-yle.png'

export default () => (
  <Fragment>
    <h1>Clients</h1>
    <p className="narrow centered">
      We’re your partner in turning good ideas into well working
      digital products & services.
    </p>
    <LogoGrid>
      {[
        ['Yle', logoYle],
        ['Barona', logoBarona],
        ['Smartly', logoSmartly],
        ['Sanoma Pro', logoSanomaPro],
        ['Perusterveys', logoPerusterveys],
        ['Redbull', logoRedbull],
        ['L&T', logoLt],
        ['Rovio', logoRovio],
      ]}
    </LogoGrid>
  </Fragment>
)

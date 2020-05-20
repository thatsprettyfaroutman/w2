import React, { Fragment } from 'react'

import MainTitle from '../../../components/MainTitle'
import TransitionLink from '../../../components/TransitionLink'
import Image from '../../../components/Image'
import Indent from '../../../components/Indent'
import SubTitle from '../../../components/SubTitle'
import CallToAction from '../../../components/CallToAction'
import ContactRow from '../../../components/ContactRow'
import { ElectronicInvoicing } from '../../callToActions'
import { Helsinki, Berlin } from '../../contactOffices'
import {
  MikaViskari,
  AnteroTorhonen,
  JoannaRindell,
  JasperVanGhemen,
  MariaStenberg,
  EmiliaVesa,
  LauriPaalama
} from '../../contactFaces'
import helsinki from './office_helsinki.jpg'
import berlin from './office_berlin.jpg'

export default () => (
  <Fragment>
    <MainTitle narrow>Get in touch, we'd love to hear from you</MainTitle>
    <p>
    We are currently serving 100% of our customers remotely. Would you also like to be served?
    <TransitionLink to='https://wunderdog.fi/smarter-future'> See more.</TransitionLink>
    <SubTitle>
      Feel free to throw us a question or two <a className="noHyphen" href="mailto:hello@wunderdog.fi">hello<span>@</span>wunderdog.fi</a>
    </SubTitle>
    </p>
    <Image src={ helsinki } alt="Helsinki" indent hero />
    <Indent>
      <ContactRow>
        <Helsinki />
        <MikaViskari />
        <AnteroTorhonen />
        <MariaStenberg />
        <EmiliaVesa />
      </ContactRow>
    </Indent>

    <Image src={ berlin } alt="Berlin" indent hero />
    <Indent>
      <ContactRow>
        <Berlin />
        <JoannaRindell />
        <JasperVanGhemen />
        <LauriPaalama />
      </ContactRow>
    </Indent>

    <CallToAction color="grey" large grid>
      <ElectronicInvoicing />
    </CallToAction>
  </Fragment>
)

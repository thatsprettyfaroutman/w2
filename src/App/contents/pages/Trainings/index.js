import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Indent from 'App/components/Indent'
import Grid from 'App/components/Grid'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { SeriousStats } from 'App/contents/stats'
import Logos from 'App/components/Logos'
import { Clients, Ecosystem } from 'App/contents/other'
import CssVars from 'App/components/CssVars'
import TransitionLink from '../../../components/TransitionLink'
import {AnteroTorhonen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

import hero from './trainings-wunderdog.jpg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Our experienced coaches are here to help</MainTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Sharing our knowledge is at the core of our operations</h2>
    </Chapter>
    <Chapter>
      <p>
        Over the years of consulting, we've learned to recognise important
        topics that require attention at our clients' and in that we are experts
        in. Some of the themes are bigger and require time dedicated to studying
        and understanding them - more than we have time or resources to share while
        doing our regular consulting work. Here are few important topics that we've
        packed into compact training sessions. Remote or not, we can help you broaden
        your skills to meet the needs of the constantly changing digital world.
      </p>
    </Chapter>

    <Chapter>
      <p><b>TypeScript</b><br /> We organise TypeScript and Advanced TypeScript
      sessions for novices and advanced developers. During these sessions
      we'll go through the background of TypeScript and why TypeScript is the
      way it is. We will also cover some TypeScript features and how they can
      improve your code and increase your productivity.</p>
      <p><b>API-Development</b><br /> Protocols, error handling, and code
      modularity are just some of the questions your team needs to address
      before building a great API.</p>
      <p><b>Design Sprint </b><br /> You'll learn how to use this method to find
      out how potential users would react to your idea and, as a result, you
      will be able to make a well-founded
      decision on how to progress.</p>
      <p><b>Elements of a successful software project</b><br /> This training
      is designed for anyone who works or is interested in working in the
      digital world.</p>

      <Chapter>
      <p>
       <i>Contact us for more information. We're happy to
       answer any question and tailor our offering according to your needs!</i>
      </p>
      </Chapter>
    </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's learn together.">
        <AnteroTorhonen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)

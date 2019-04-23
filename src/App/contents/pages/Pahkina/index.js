import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Highlight from 'react-highlight'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'
import YoutubeVideo from 'App/components/YoutubeVideo'

import heroThumb from './pahkina-hero-thumb1.jpg'
import hero from './pahkina-hero.png'
import summary from './smartly-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#444444',
        '--color-text-on-accent': '#ffffff',
        '--color-background': '#000',
        '--text-on-background': '#fff',
        '--chapter-large-device-display': 'block',
        '--body-font-size': '16px'
      }}
    </CssVars>
    <MainTitle>Wundernut</MainTitle>
    <DatLine />
    <SubTitle useAsMetaTitle>01/2019 Doggolang</SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Pahkina" />
    <Chapter>
      <h4>The problem</h4>
      <p>
      The dogs have developed a new programming language to advance their
      control over the world! We have obtained some samples of their source
      code and have deciphered most of it but can't put it all together.
      This is where your special skills are needed: write an interpreter
      and run the very important code to reveal its secrets!
      </p>
    </Chapter>
    <Chapter>
      <h4>This is what we know</h4>
      <Highlight className='plaintext'>
{`lassie AWOO 5
luna AWOO 6
bailey AWOO lassie WOOF luna
bailey`}
      </Highlight>
      <p>
      Result is 11
      </p>
    </Chapter>
    <Chapter>
      <Highlight className='plaintext'>
{`roi AWOO 5
RUF? roi YAP 2 VUH
    roi AWOO roi ARF 3
ROWH
    roi AWOO roi WOOF 100
ARRUF
roi`}
      </Highlight>
      <p>
      Result is 15
      </p>
    </Chapter>
    <Chapter>
    <Highlight className='plaintext'>
{`roi AWOO 5
RUF? roi YIP 2 VUH
  roi AWOO roi ARF 3
ROWH
  roi AWOO roi WOOF 100
ARRUF
roi`}
    </Highlight>
    <p>
    result is 105
    </p>
    </Chapter>
    <Chapter>
    <Highlight className='plaintext'>
{`quark AWOO 6 BARK 2
gromit AWOO 5
milo AWOO 0
GRRR milo YIP gromit BOW
    quark AWOO quark WOOF 3
    milo AWOO milo WOOF 1
BORF
quark`}
    </Highlight>
    <p>
    result is 19
    </p>
    </Chapter>
    <Chapter>
      <h4>The task</h4>
      <p>
        Please run this very important code and return the result and your
        interpreter source code to us as soon as possible:Kuva
      </p>
      <Highlight className='plaintext'>
{`samantha AWOO 1
hooch AWOO 500
einstein AWOO 10
fuji AWOO 0
GRRR fuji YIP hooch BOW
    samantha AWOO samantha WOOF 3
    RUF? samantha YAP 100 VUH
      samantha AWOO samantha BARK 1
    ROWH
      einstein AWOO einstein WOOF 1
      samantha AWOO samantha ARF einstein
    ARRUF
    fuji AWOO fuji WOOF 1
BORF
GRRR fuji YAP 0 BOW
    samantha AWOO samantha WOOF 375
    fuji AWOO fuji BARK 3
BORF
samantha`}
      </Highlight>
      <p>
        Your's truly,
        Leader Of Litter, Cat At Top
      </p>
    </Chapter>

    <Chapter>
      <h4>General rules</h4>

      <ul>
      <li>
        You can use any programming language to solve the problem.
      </li>
      <li>
        The solution must contain the right answer.
      </li>
      <li>
        The winner will be the most elegant solution, decided by the Wundernut
        jury.
      </li>
      <li>
        Performance is a part of elegance.
      </li>
      <li>
      The participant gives Wunderdog the right to publish their source code
      used in the submitted solutions.
      </li>
      <li>
        Submit your via the form below at latest YYYY-MM-DD.
      </li>
      <li>
        The winner is chosen by our Wunderdog jury and he/she will be awarded
        with Nokia activity watch (Tsekkaa oikee nimi ja malli).
      </li>
      </ul>
      <p>

      </p>

    </Chapter>
    <Chapter>
      <h4>Submit your asnwer here!</h4>
      <p>

      </p>
    </Chapter>

    <Summary>
      <Image src={ summary } alt="" />
      <h4>In a nutshell</h4>
      <p>
        Crack the nut. Submit to xx.
      </p>
      <h4>Dates</h4>
      <p>
        Deadline for submitting is xx.xx.xx. Results xx.xx.xx
      </p>
      <h4>Reward</h4>
      <p>
        Nokia watch
      </p>
    </Summary>

  </Fragment>
)

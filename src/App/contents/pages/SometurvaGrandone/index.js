import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import MainTitle from '../../../components/MainTitle'
import Image from '../../../components/Image'
import Indent from '../../../components/Indent'
import ImageRow from '../../../components/ImageRow'
import Chapter from '../../../components/Chapter'
import Video from '../../../components/Video'
import Stats from '../../../components/Stats'
import { SometurvaStats } from '../../stats'
import hero from './someturva-hero.jpg'
import photo1 from './someturva-1.jpg'
import photo2 from './someturva-2.jpg'
import photo3 from './someturva-3.jpg'
import photo4 from './someturva-4.jpg'

export default () => (
  <Fragment>
    <MainTitle narrow>Delivering justice for young people online</MainTitle>
    <Image src={ hero } alt="Someturva" indent hero/>
    <Chapter>
      <p>
        SomeBuddy is a mobile application that offers legal services to stop
        bullying on social media. Using this application, youngsters in
        particular will be able to seek help for inappropriate behaviour
        they may face online. The application is a service offering
        low-threshold legal assistance for problems such as bullying,
        harassment, or the dissemination of private data. SomeBuddy has
        the heart of an AI but the kindness and empathy of a human.
      </p>
    <BlockQuote by="High school student Riikka, Some Deep Story, Yle">
      Sometimes when I opened Facebook the first 7 posts on my front page
      were posts where people were slagging me off.
    </BlockQuote>
    </Chapter>
    <ImageRow>
      <Image src={ photo4 } alt="Someturva app" />
    </ImageRow>
    <Indent twice>
      <Stats useAccent>
        <SometurvaStats />
      </Stats>
    </Indent>
    <ImageRow>
      <Image src={ photo1 } alt="Someturva app" />
      <Image src={ photo2 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
      <h2>How SomeBuddy works</h2>
      <p>
        <b>Most social media crimes are minor offences, that
        can be dealt with by settling.</b> <br/> By request SomeBuddy can send
        a request to settle to the person who committed the crime to
        facilitate a settlement.  

      </p>
      <p>
        <b>Occasionally, crimes committed on social media can’t be settled,
        like sex offences.</b> <br/> In these cases SomeBuddy contacts
        the victim and advises them in detail on how to proceed with the
        matter.
      </p>
      <p>
        <b>SomeBuddy helps with reporting the crime to the victim's parents.</b> <br/>
        Victims often might feel ashamed or guilty, which stops them from
        asking for help from their parents. SomeBuddy helps by creating a
        personalized letter to parents: the letter describes what the victim
        has suffered and how best to proceed.
      </p>
      <p>
        <b>Even if the case does not meet the criteria to be considered a crime,
        victims are still provided emotional support, suggestions on how to
        proceed with the case and tips for social media security settings. </b> <br/>
        In every case, SomeBuddy is there to support the youngster.
        Psychological help is available through the service.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo3 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
    <h2>So far 18000 youngsters have accessed to the service</h2>
    <p>
        Somebuddy has helped over 1000 people in resolving the crimes they
        have reported.

    </p>
    </Chapter>
    <Video src="https://player.vimeo.com/external/373123756.hd.mp4?s=df9edf8ebcd1410bca9d4743c2f1221c115fd73f&profile_id=174" />
    <Chapter>
      <h2>
      In November 2019, the King of Sweden invited Suvi Uski, one of the
      bright minds behind SomeBuddy, to discuss how to improve safety for
      children on social media

      </h2>
      <p>
        <b>UX Design:</b> Wunderdog<br/>
        <b>Development:</b> Wunderdog<br/>
        <b>Client:</b> SomeBuddy<br/>
        <b>Categories:</b> Best service design, Best design
      </p>
    </Chapter>
  </Fragment>
)

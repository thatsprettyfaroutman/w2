import React, { Fragment } from 'react'

import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'
import BlockQuote from 'App/components/BlockQuote'
import photo1 from './blueprint-photo1.jpg'
import photo2 from './blueprint-photo2.jpg'
import photo3 from './blueprint-photo3.jpg'
import photo4 from './blueprint-photo4.jpg'
import photo5 from './blueprint-photo5.jpg'
import photo6 from './blueprint-photo6.jpg'
import {AnteroTorhonen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
        We kicked off the partnership in 2017 by rolling up our sleeves for the
        daily development work while at the same time coaching the Blueprint
        Genetics team to help them sharpen up their software development
        practices in terms of technologies, communication, and leadership.
      </p>
      <p>
        We helped to set up a development process where everything starts from
        business and operational needs and decisions are made based on
        prioritisation and workloads. We also pitched in on building an
        architecture that’s capable of handling ever-increasing amounts of data
        in real time. We also helped to develop a new production process for
        analysing sequenced DNA samples and reduce process lead times.
      </p>
      <p>
        As workload increases alongside business growth, it is crucially
        important to maintain open and transparent ways of working, employing
        best practices and maintaining good cooperation between development teams,
        day-to-day operations, different stakeholders, and users. As well as
        helping with practical matters on the software development side we
        helped Blueprint Genetics scale up by empowering their teams to take even
        greater leaps forward both in their development processes and the volume
        of analyses their pipelines could handle.
      </p>
      <BlockQuote by="Jussi Paananen, Chief Technology Officer at Blueprint Genetics">
      We appreciate Wunderdog's hard work, open communication and ability to take
      improvements forward.
      </BlockQuote>
    </Chapter>
    <Indent twice><Stats>
      <div>
        <span>200%</span>
        <span>The turnover of Blueprint Genetics has more than doubled annually
        during our co-operation.</span>
      </div>
      <div>
        <span>1000TB</span>
        <span>The amount of data Blueprint Genetics gathers is today
        counted in petabytes. One petabyte equals to 1000 terabytes.</span>
      </div>
    </Stats></Indent>
    <ImageRow>
      <Image src={ photo1 } alt="Blueprint lab" />
      <Image src={ photo2 } alt="Blueprint lab" />
    </ImageRow>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
        In 2011, three Finnish post-docs in Stanford had an idea about a new
        sequencing technology that could bring genetic testing to mainstream
        healthcare. What if something that began as a research project could be
        transformed into a successful, growing business with a large set of
        commercial products and services all supported by modern digital
        solutions that are equipped to handle massive amounts of human genetic
        data?
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        A growing business means a growing need for software development talent,
        so Blueprint Genetics got in touch to find out if our experienced
        developers and scrum coaches could help their entire team – from business
        stakeholders and domain experts to product owners and individual
        developers – learn about Scrum best practice and help to improve their
        products.
      </p>
    </Chapter>
    <Image src={ photo3 } alt="Blueprint lab crew" />
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
        Blueprint Genetics is a great example of finding business success in a
        lean start-up way: quick experimentation with new ideas, short
        development cycles, and fast commercialisation have led to fast business
        growth.
      </p>
      <p>
        The turnover of Blueprint Genetics has more than doubled annually during
        our co-operation. The amount of data Blueprint Genetics gathers is today
        counted in petabytes and they utilise considerable amounts of computing
        power. We also helped take development culture forward and recruit new
        team members.
      </p>
    </Chapter>
    <Image src={ photo4 } alt="Blueprint pic" />
    <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
        Thanks to the new ways of working we’ve introduced and our contribution
        to software development, work at Blueprint Genetics is now more
        transparent, agile, and efficient. We created a solid platform for
        Blueprint Genetics to continue their great growth and success. The
        collaboration with two modern and fast-paced company was a success for
        everyone involved.
      </p>
    </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <AnteroTorhonen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)

import './index.css'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import cs from 'classnames'

export default ({ children, className, narrow, centered, ...props }) => (
  <Fragment>
    <Helmet>
      <title>{ children } | Wunderdog</title>
      <meta
        name="apple-mobile-web-app-title"
        content={`${ children } | Wunderdog`}
      />
      <meta
        name="application-name"
        content={`${ children } | Wunderdog`}
      />
      <meta
        name="twitter:title"
        content={`${ children } | Wunderdog`}
      />
      <meta
        name="og:title"
        content={`${ children } | Wunderdog`}
      />
      <meta
        name="description"
        content={ children }
      />
      <meta
        name="twitter:description"
        content={ children }
      />
      <meta
        name="og:description"
        content={ children }
      />
    </Helmet>
    <h1 { ...props }
      className={cs(
        'MainTitle',
        centered && 'MainTitle--centered',
        narrow && 'MainTitle--narrow',
        className
      )}
      children={ children }
    />
  </Fragment>
)

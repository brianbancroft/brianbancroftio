import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <h1>Howdy!</h1>
        <p>I am Brian Bancroft, a generalist. I'm currently employed as a fullstack developer with <a href="https://careerjsm.com/">@careerjsm</a>. I work/play in the following:</p>
        <ul>
          <li>Ruby (and Rails)</li>
          <li>Node (Express and Koa)</li>
          <li>JS (React, Vue and Ember)</li>
          <li>Mapping (ArcGIS and QGIS)</li>
          <li>Analysis (R and Python)</li>
        </ul>
      </div>
    )
  }
}

export default Index


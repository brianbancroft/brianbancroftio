import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <h2>Howdy!</h2>
        <p>I am Brian Bancroft, a generalist. I'm currently employed as a <em>intermediate software developer</em> with <strong><a href="https://careerjsm.com/" target="_blank" style={{textDecoration: 'none'}}>@careerjsm</a></strong>. I work/play in the following:</p>
        <ul>
          <li style={{marginBottom: '5px'}}>Ruby (and Rails)</li>
          <li style={{marginBottom: '5px'}}>Node (Express and Koa)</li>
          <li style={{marginBottom: '5px'}}>JS (Ember, Vue and React)</li>
          <li style={{marginBottom: '5px'}}>Mapping (ArcGIS and QGIS)</li>
          <li style={{marginBottom: '5px'}}>Analysis (R and Python)</li>
        </ul>
      </div>
    )
  }
}

export default Index


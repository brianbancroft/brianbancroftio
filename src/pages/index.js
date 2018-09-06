import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import { Globe } from '../components/'

const frontPageLiStyle = css`
  margin-bottom: 5px;
`

export default () => (
  <div>
    <Helmet title={'Brian Bancroft'} />
    <p>
      Hi! I'm a generalist - A software developer with a background in physics
      and geography and with army experience. I work/play in the following:
    </p>
    <ul>
      <li className={`${frontPageLiStyle}`}>Ruby (Rails), Node (Express)</li>
      <li className={`${frontPageLiStyle}`}>JS (Ember, Vue and React)</li>
      <li className={`${frontPageLiStyle}`}>Mapping (ArcGIS and QGIS)</li>
      <li className={`${frontPageLiStyle}`}>Analysis (GIS, R and Python)</li>
    </ul>
    <div id="content">
      <Globe />
    </div>
  </div>
)

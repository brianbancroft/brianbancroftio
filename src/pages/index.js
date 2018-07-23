import React from 'react'

import { rhythm } from '../utils/typography'
import Globe from './Globe'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: { lat: 48.85, lng: 2.35 },
    }
  }

  render() {
    return (
      <div>
        <h2>Howdy!</h2>
        <p>
          I am Brian Bancroft, a generalist. I'm currently employed as a{' '}
          <em>intermediate software developer</em>. I work/play in the
          following:
        </p>
        <ul>
          <li style={{ marginBottom: '5px' }}>Ruby (and Rails)</li>
          <li style={{ marginBottom: '5px' }}>Node (Express and Koa)</li>
          <li style={{ marginBottom: '5px' }}>JS (Ember, Vue and React)</li>
          <li style={{ marginBottom: '5px' }}>Mapping (ArcGIS and QGIS)</li>
          <li style={{ marginBottom: '5px' }}>Analysis (R and Python)</li>
        </ul>
        <div id="content">
          <Globe />
        </div>
      </div>
    )
  }
}

export default Index

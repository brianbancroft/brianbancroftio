import React from 'react'
import { Globe } from '../components'

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
        <p>
          Hi! I'm a generalist - A software developer with a background in
          physics and geography and with army experience. I work/play in the
          following:
        </p>
        <ul>
          <li style={{ marginBottom: '5px' }}>Ruby (Rails), Node (Express)</li>
          <li style={{ marginBottom: '5px' }}>JS (Ember, Vue and React)</li>
          <li style={{ marginBottom: '5px' }}>Mapping (ArcGIS and QGIS)</li>
          <li style={{ marginBottom: '5px' }}>Analysis (GIS, R and Python)</li>
        </ul>
        <div id="content">
          <Globe />
        </div>
      </div>
    )
  }
}

export default Index

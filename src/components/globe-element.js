import React from 'react'

import { createGlobe } from '../helpers'

// Currently not in use
export default class Globe extends React.Component {
  componentDidMount() {
    createGlobe({ refs: this.refs })
  }

  render() {
    return (
      <div
        id="globe"
        className="fade-in"
        ref="globe"
        style={{
          position: 'fixed',
          top: '40px',
          zIndex: -100,
        }}
      />
    )
  }
}

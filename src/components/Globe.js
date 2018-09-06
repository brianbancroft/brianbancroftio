import React from 'react'

import { createGlobe } from '../helpers'

export default class Globe extends React.Component {
  componentDidMount() {
    createGlobe({ refs: this.refs })
  }

  render() {
    return (
      <div
        id="globe"
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

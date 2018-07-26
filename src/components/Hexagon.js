import React from 'react'
import { css } from 'emotion'
import { HexTitle } from './hex-title'

class Hexagon extends React.Component {
  render() {
    const hexStyle = css`
      width: 100%;
      height: 100%;
      text-align: center;
      color: #fff;
      overflow: hidden;

      -webkit-transform: skewY(-30deg) rotate(60deg);
      -ms-transform: skewY(-30deg) rotate(60deg);
      transform: skewY(-30deg) rotate(60deg);

      -webkit-backface-visibility: hidden;
    `

    return (
      <div
        className={`${hexStyle}`}
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        <HexTitle>{this.props.title}</HexTitle>
      </div>
    )
  }
}

export default Hexagon

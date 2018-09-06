import React from 'react'
import { css } from 'emotion'
import { HexTitle } from '.'

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

export default ({ backgroundImage, title }) => (
  <div
    className={`${hexStyle}`}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <HexTitle>{title}</HexTitle>
  </div>
)

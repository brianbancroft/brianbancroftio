import React from 'react'

import { css } from 'emotion'
import { HexTitle } from '.'

// Emotion-based style
const hexStyle = img => css`
  &:before {
    background-image: url(${img});
    display: inline-block;
    content: '';
  }
`

export default ({ title, clickAction, backgroundImage, index }) => (
  <li
    key={`hexagon-li-${index}`}
    className={`${hexStyle(backgroundImage)}`}
    onClick={clickAction}
  >
    <HexTitle>{title}</HexTitle>
  </li>
)

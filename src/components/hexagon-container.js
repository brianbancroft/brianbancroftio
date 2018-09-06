import React from 'react'
import { Hexagon } from '.'

export default ({ title, clickAction, backgroundImage, index }) => (
  <li key={`hexagon-li-${index}`} onClick={clickAction}>
    <Hexagon title={title} backgroundImage={backgroundImage} />
  </li>
)

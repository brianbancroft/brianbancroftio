import React from 'react'
import { HexagonBase } from '.'

export default ({ title, clickAction, backgroundImage, index }) => (
  <li key={`hexagon-li-${index}`} onClick={clickAction}>
    <HexagonBase title={title} backgroundImage={backgroundImage} />
  </li>
)

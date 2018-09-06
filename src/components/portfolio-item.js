import React from 'react'
import { get } from 'lodash'
import { navigateTo } from 'gatsby-link'

import { HexagonContainer } from '.'

export default ({ item, index }) => {
  const title = get(item, 'node.frontmatter.title') || item.node.fields.slug
  return (
    <HexagonContainer
      id={item.node.fields.slug}
      key={`portfolio-item-${index}`}
      title={title}
      index={index}
      backgroundImage={item.node.frontmatter.preview}
      clickAction={() => navigateTo(item.node.fields.slug)}
    />
  )
}

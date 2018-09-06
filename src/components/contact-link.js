import React from 'react'
import { css } from 'emotion'

const contactLinkStyle = css`
  color: #444;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`

export default content => (
  <div>
    <a
      className={`${contactLinkStyle}`}
      href={content.uri}
      target="_blank"
      style={{ textDecoration: 'none', display: 'inline-block' }}
    >
      <content.IconComponent size={56} />
    </a>
  </div>
)

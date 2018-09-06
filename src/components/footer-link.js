import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import { IconContainer } from '.'

const titleStyle = css`
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  letter-spacing: 2px;
`

const linkContainerImageStyle = css`
  @media (max-width: 350px) {
    max-width: 100%;
  }
`

const linkContainerStyle = css`
  background: white;
  height: 90px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 350px) {
    width: 80px;
  }
`

export default ({ location, iconLink, title }) => (
  <Link to={location}>
    <div className={`${linkContainerStyle}`}>
      <IconContainer>
        <img
          className={`${linkContainerImageStyle}`}
          src={iconLink}
          alt={title}
        />
      </IconContainer>
      <div className={`${titleStyle}`}>{title}</div>
    </div>
  </Link>
)

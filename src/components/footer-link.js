import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'

const LinkName = styled('div')`
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  letter-spacing: 2px;
`

const LinkContainer = styled('div')`
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

const linkIconStyle = url => css`
  height: 60px;
  width: 60px;
  background: url(${url});
`

export default ({ location, iconLink, title }) => (
  <Link to={location}>
    <LinkContainer>
      {/* <div className={`${linkIconStyle(iconLink)}`} /> */}
      <LinkName>{title}</LinkName>
    </LinkContainer>
  </Link>
)

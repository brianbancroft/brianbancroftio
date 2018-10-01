import React from 'react'
import styled from 'react-emotion'

import { FooterLink } from '.'
import { footerLinkValues } from '../constants'

const LinksetContainer = styled('div')`
  position: fixed;
  bottom: 0;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  margin: 0 auto;
  padding: 5px 28% 0 28%;

  @media (max-width: 600px) {
    width: 90%;
    padding: 5px 0 0 0;
  }

  @media (max-width: 350px) {
    width: 90%;
    padding: 5px 0 0 0;
  }
`

export default () => {
  const linkItemContent = footerLinkValues.map(i => (
    <FooterLink
      key={i.key}
      iconLink={i.iconLink}
      location={i.location}
      title={i.title}
    />
  ))

  return <LinksetContainer>{linkItemContent}</LinksetContainer>
}

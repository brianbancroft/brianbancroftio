import React from 'react'
import { css } from 'emotion'

import { FooterLink } from '.'
import { footerLinkValues } from '../constants'

const footerContainerStyle = css`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: white;
  padding-top: 5px;
`

const linksetContainerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 350px) {
    width: 90%;
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

  return (
    <div className={`${footerContainerStyle}`}>
      <div className={`${linksetContainerStyle}`}>{linkItemContent}</div>
    </div>
  )
}

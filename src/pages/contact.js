import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import { ContactLink } from '../components'
import { contactLinkValues } from '../constants'

const contactsContainerStyle = css`
  display: flex;
  justify-content: space-around;
`

export default () => {
  const linkList = contactLinkValues.map(i => (
    <ContactLink key={i.key} uri={i.uri} IconComponent={i.component} />
  ))

  return (
    <div>
      <Helmet title="Get in Touch | Brian Bancroft" />
      <h2>Get in Touch!</h2>
      <p>
        While I'm hapilly-employed over at @EQWorks, I'm always looking for
        problems to solve on the side. If you want to get in touch, these are
        the best ways to get a hold of me. Also, my general resume is also
        available{' '}
        <a href="https://cdn.brianbancroft.io/assets/resumes/2018/resume_brian_bancroft_2018.pdf">
          here
        </a>.
      </p>
      <div className={contactsContainerStyle}>{linkList}</div>
    </div>
  )
}

import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { css } from 'emotion'

import { ContactLink } from '../components'
import { contactLinkValues } from '../constants'

const contactsContainerStyle = css`
  display: flex;
  justify-content: space-around;
`


class Contact extends Component {
  render() {
    const linkList = contactLinkValues.map(i => (
      <ContactLink key={i.key} uri={i.uri} IconComponent={i.component} />
    ))

    return (
      <div>
        <Helmet title="Get in Touch | Brian Bancroft" />
        <h2>Get in Touch!</h2>
        <p>
          I'm always looking for problems to solve on the side, and am able to
          take on short contracts. If you want to get in touch, these are the best
          ways to get a hold of me. If you want it, my general resume is also
          available{' '}
          <a href="https://cdn.brianbancroft.io/assets/resumes/2018/resume_brian_bancroft_2018.pdf">
            here
          </a>. My skills are mainly in GIS analysis, mapmaking, and fullstack
          software development. While I slink away from PHP, I'm happy to work
          with most other stacks.
        </p>
        <div className={contactsContainerStyle}>{linkList}</div>
      </div>
    )
  }
}

export default Contact;

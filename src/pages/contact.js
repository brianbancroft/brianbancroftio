import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'emotion'
import {
  FaGithubSquare,
  FaLinkedinSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
} from 'react-icons/lib/fa'

const contactsContainerStyle = css`
  display: flex;
  justify-content: space-around;
`

const contactLinkStyle = css`
  color: #444;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`

const ContactLink = content => (
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

class Contact extends React.Component {
  render() {
    const linkList = [
      {
        uri: 'https://github.com/brianbancroft',
        component: FaGithubSquare,
        key: 1,
      },
      {
        uri: 'https://ca.linkedin.com/in/geobrian',
        component: FaLinkedinSquare,
        key: 2,
      },
      {
        uri: 'https://twitter.com/brian_bancroft',
        component: FaTwitterSquare,
        key: 3,
      },
      {
        uri: 'mailto:hello@brianbancroft.ca',
        component: FaEnvelopeSquare,
        key: 4,
      },
    ].map(i => (
      <ContactLink key={i.key} uri={i.uri} IconComponent={i.component} />
    ))

    return (
      <div>
        <Helmet title='Get in Touch | Brian Bancroft' />
        <h2>Get in Touch!</h2>
        <p>
          While I'm hapilly-employed over at @EQWorks, I'm always looking for problems to solve on the side.
          If you want to get in touch, these are the best ways to get a hold of me. Also, my general resume is also available{' '}
          <a href="https://cdn.brianbancroft.io/assets/resumes/2018/resume_brian_bancroft_2018.pdf">
            here
          </a>.
        </p>
        <div className={contactsContainerStyle}>{linkList}</div>
      </div>
    )
  }
}

export default Contact

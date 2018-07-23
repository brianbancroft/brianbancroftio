import React from 'react'
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
        <h2>Get in Touch!</h2>
        <p>
          Feel free to get in touch any time you have a question or problem that
          needs solving. My general resume is also available{' '}
          <a href="https://cdn.brianbancroft.io/assets/resumes/2018/brianbancroft_development.pdf">
            here
          </a>.
        </p>
        <div className={contactsContainerStyle}>{linkList}</div>
      </div>
    )
  }
}

export default Contact

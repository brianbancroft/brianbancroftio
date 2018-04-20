import React from 'react'
import Link from 'gatsby-link'
import {FaGithubSquare, FaLinkedinSquare, FaTwitterSquare, FaEnvelopeSquare} from 'react-icons/lib/fa'

const ContactLink = content =>
  <div className="contacts-container__contact">
    <a href={content.uri}
       target="_blank"
       style={{textDecoration: 'none', display: 'inline-block'}}>
      <content.IconComponent size={56} style={{textDecoration: 'none'}} />
    </a>
  </div>

class Contact extends React.Component {
  render() {

    const linkList = [
      {
        uri: 'https://github.com/brianbancroft',
        component: FaGithubSquare,
        key: 1
      }, {
        uri: 'https://ca.linkedin.com/in/geobrian',
        component: FaLinkedinSquare,
        key: 2
      }, {
        uri: 'https://twitter.com/brian_bancroft',
        component: FaTwitterSquare,
        key: 3
      }, {
        uri: 'mailto:hello@brianbancroft.ca',
        component: FaEnvelopeSquare,
        key: 4
      }
    ].map(i => <ContactLink key={i.key} uri={i.uri} IconComponent={i.component} />)

    return (
      <div>
        <h2>Get in Touch!</h2>
        <p>
          Feel free to get in touch any time you have a question or problem that needs solving. My general resume is also available <a href="https://1drv.ms/b/s!AtUlz8vZ_1DKgvdqvt7f6KMH9QlrhQ">here</a>.
        </p>
        <div className="contacts-container">
          {linkList}
        </div>
      </div>
    )
  }
}

export default Contact

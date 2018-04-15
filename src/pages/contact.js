import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'


import {FaGithubSquare, FaLinkedinSquare, FaTwitterSquare, FaEnvelopeSquare} from 'react-icons/lib/fa'


class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Get in Touch!</h2>
        <p>Feel free to get in touch any time you have a question or problem that needs solving</p>
          <div className="contacts-container">
          <div className="contacts-container__contact">
            <a href="https://github.com/brianbancroft" target="_blank"><FaGithubSquare size={56}/></a>
          </div>
          <div className="contacts-container__contact">
            <a href="https://ca.linkedin.com/geobrian" target="_blank"><FaLinkedinSquare size={56}/></a>
          </div>
          <div className="contacts-container__contact">
            <a href="https://twitter.com/brian_bancroft" target="_blank"><FaTwitterSquare size={56}/></a>
          </div>
          <div className="contacts-container__contact">
            <a href="mailto:hello@brianbancroft.ca" target="_blank"><FaEnvelopeSquare size={56}/></a>
          </div>
          {/* <div className="contacts-container__contact">
            <a href="mailto:hello@brianbancroft.ca" target="_blank">Test</a>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Contact

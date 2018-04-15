import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'


class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Get in Touch!</h2>
        <p>Feel free to get in touch any time you have a question or problem that needs solving</p>

        <h3>hello@brianbancroft.ca</h3>
        <ul>
          <li><a href="https://ca.linkedin.com/geobrian">Linkedin</a></li>
          <li><a href="https://twitter.com/brian_bancroft">Twitter</a></li>
          <li><a href="https://github.com/brianbancroft">Github</a></li>
          <li><a href="https://mastodon.club/@brianbancroft">Mastodon</a></li>
        </ul>
      </div>
    )
  }
}

export default Contact

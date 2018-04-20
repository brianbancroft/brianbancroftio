import React from 'react'
import Link from 'gatsby-link'


import FooterLink from './FooterLink'

class Footer extends React.Component {
  render() {

    const footerLinks = [
      {
        iconLink: 'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/monitor.svg',
        location: '/',
        title: 'home',
        key: 1
      }, {
        iconLink: 'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/image.svg',
        location: '/portfolio',
        title: 'portfolio',
        key: 2
      }, {
        iconLink: 'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/idea.svg',
        location: '/posts',
        title: 'posts',
        key: 3
      }, {
        iconLink: 'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/chat.svg',
        location: '/contact',
        title: 'contact',
        key: 4
      }
    ]

    const linkItemContent = footerLinks.map(i =>
      <FooterLink key={i.key} iconLink={i.iconLink} location={i.location} title={i.title} />
    )

    return (
      <div className="footer-container">
        <div className="linkset-container">
          {linkItemContent}
        </div>
      </div>
    )
  }
}

export default Footer

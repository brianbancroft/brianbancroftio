import React from 'react'
import Link from 'gatsby-link'


import FooterLink from './FooterLink'

class Footer extends React.Component {
  render() {

    const footerLinks = [
      {
        iconLink: 'https://s3.amazonaws.com/cdn.brianbancroft.io/images/portfolio-site/footer-icons/monitor.svg',
        location: '/',
        title: 'home'
      }, {
        iconLink: 'https://s3.amazonaws.com/cdn.brianbancroft.io/images/portfolio-site/footer-icons/image.svg',
        location: '/portfolio',
        title: 'portfolio'
      }, {
        iconLink: 'https://s3.amazonaws.com/cdn.brianbancroft.io/images/portfolio-site/footer-icons/idea.svg',
        location: '/posts',
        title: 'posts'
      }, {
        iconLink: 'https://s3.amazonaws.com/cdn.brianbancroft.io/images/portfolio-site/footer-icons/chat.svg',
        location: '/contact',
        title: 'contact'
      }
    ]

    const linkItemContent = footerLinks.map(i =>
      <FooterLink iconLink={i.iconLink} location={i.location} title={i.title} />
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

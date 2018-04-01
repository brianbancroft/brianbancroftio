import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import FooterLink from './FooterLink'

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  border-top: 1px solid #222;
  background: white;
`

const LinkSetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
  background: #444;
  margin: 0 auto;
`

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
      <FooterContainer>
        <LinkSetContainer>
          {linkItemContent}
        </LinkSetContainer>
      </FooterContainer>
    )
  }
}

export default Footer

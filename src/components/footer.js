import React from 'react'
import { css } from 'emotion'
import FooterLink from './FooterLink'

// Thisis a comment
const footerContainerStyle = css`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: white;
`

const linksetContainerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 350px) {
    width: 90%;
  }
`

class Footer extends React.Component {
  render() {
    const footerLinks = [
      {
        iconLink:
          'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/monitor.svg',
        location: '/',
        title: 'home',
        key: 1,
      },
      {
        iconLink:
          'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/image.svg',
        location: '/portfolio',
        title: 'portfolio',
        key: 2,
      },
      {
        iconLink:
          'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/idea.svg',
        location: '/posts',
        title: 'posts',
        key: 3,
      },
      {
        iconLink:
          'https://cdn.brianbancroft.io/images/brianbancroftio/footer-icons/chat.svg',
        location: '/contact',
        title: 'contact',
        key: 4,
      },
    ]

    const linkItemContent = footerLinks.map(i => (
      <FooterLink
        key={i.key}
        iconLink={i.iconLink}
        location={i.location}
        title={i.title}
      />
    ))

    return (
      <div className={`${footerContainerStyle}`}>
        <div className={`${linksetContainerStyle}`}>{linkItemContent}</div>
      </div>
    )
  }
}

export default Footer

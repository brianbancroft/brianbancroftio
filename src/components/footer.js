import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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

const LinkContainer = styled.div`
  background: white;
  height: 80px;
  width: 80px;
  background: #666;
  color: white;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <LinkSetContainer>
          <Link to="/"><LinkContainer>Home</LinkContainer></Link>
          <Link to="/portfolio"><LinkContainer>Portfolio</LinkContainer></Link>
          <Link to="/posts"><LinkContainer>Posts</LinkContainer></Link>
          <Link to="/contact"><LinkContainer>Contact</LinkContainer></Link>
        </LinkSetContainer>
      </FooterContainer>
    )
  }
}

export default Footer

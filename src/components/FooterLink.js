import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import IconContainer from './IconContainer'


const LinkContainer = styled.div`
  background: white;
  height: 90px;
  width: 90px;
  background: #666;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  color: #aaa;
`

class Footer extends React.Component {
  render() {

    const props = this.props

    return (
      <Link to={props.location}>
        <LinkContainer>
          <IconContainer>
            <img src={props.iconLink} />
          </IconContainer>
          <TextContainer>
            {props.title}
          </TextContainer>
        </LinkContainer>
      </Link>
    )
  }
}

export default Footer

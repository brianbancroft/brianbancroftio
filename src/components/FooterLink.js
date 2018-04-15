import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import IconContainer from './IconContainer'

const TextContainer = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  color: #222;
`

class Footer extends React.Component {
  render() {

    const props = this.props

    return (
      <Link to={props.location}>
        <div className="link-container">
          <IconContainer>
            <img
              src={props.iconLink}
              alt={props.title}
            />
          </IconContainer>
          <TextContainer>
            {props.title}
          </TextContainer>
        </div>
      </Link>
    )
  }
}

export default Footer

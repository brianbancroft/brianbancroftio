import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import { IconContainer } from '.'

const titleStyle = css`
  text-transform: uppercase;
  font-size: 12px;
  color: #222;
`

const linkContainerImageStyle = css`
  @media (max-width: 350px) {
    max-width: 100%;
  }
`

const linkContainerStyle = css`
  background: white;
  height: 90px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 350px) {
    width: 80px;
  }
`

class Footer extends React.Component {
  render() {
    const props = this.props

    return (
      <Link to={props.location}>
        <div className={`${linkContainerStyle}`}>
          <IconContainer>
            <img
              className={`${linkContainerImageStyle}`}
              src={props.iconLink}
              alt={props.title}
            />
          </IconContainer>
          <div className={`${titleStyle}`}>{props.title}</div>
        </div>
      </Link>
    )
  }
}

export default Footer

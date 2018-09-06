import React from 'react'
import { Hexagon } from '.'

class HexagonContainer extends React.Component {
  render() {
    return (
      <li key={this.props.id} onClick={this.props.clickAction}>
        <Hexagon
          title={this.props.title}
          backgroundImage={this.props.backgroundImage}
        />
      </li>
    )
  }
}

export default HexagonContainer

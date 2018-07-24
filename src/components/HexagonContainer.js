import React from 'react'
import { Hexagon } from '../components'
import { css } from 'emotion'

const style = css`
  position: relative;
  list-style-type: none;
  width: 27.85714285714286%; /* = (100-2.5) / 3.5 */
  padding-bottom: 32.16760145166612%; /* =  width /0.866 */
  float: left;
  overflow: hidden;
  visibility: hidden;
  border: 2px solid #222;
  cursor: pointer;

  -webkit-transform: rotate(-60deg) skewY(30deg);
  -ms-transform: rotate(-60deg) skewY(30deg);
  transform: rotate(-60deg) skewY(30deg);
`


class HexagonContainer extends React.Component {
  render() {
    return (
      <li
        className={`${style}`}
        key={this.props.id}
        onClick={this.props.clickAction}
      >
        <Hexagon
          title={this.props.title}
          backgroundImage={this.props.backgroundImage}
        />
      </li>
    )
  }
}

export default HexagonContainer

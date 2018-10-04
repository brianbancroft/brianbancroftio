import React from 'react'
import { css } from 'emotion'

const copyBlockStyle = css`
  min-height: 50px;
  width: 100%;
  margin-top: 30%;
  padding: 5px 8px;
  background: rgba(0, 0, 0, 0.5);
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  line-height: 1.5em;
  top: 0px;
  text-transform: uppercase;
  font-size: 1em;

  @media (max-width: 600px) {
    bottom: 0%;
    font-size: 10px;
    vertical-align: middle;
    line-height: 12px;
    font-size: 0.5em;
  }
`
export default ({ children }) => (
  <div className={`${copyBlockStyle}`}>{children}</div>
)

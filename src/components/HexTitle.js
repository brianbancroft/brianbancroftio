import React from 'react'
import { css } from 'emotion'

const hexHeader4Style = css`
  padding: 0 5%;
  background-color: rgba(71, 82, 93, 0.77);
  font-family: 'Raleway', sans-serif;
  bottom: 0%;
  font-weight: 500;
  font-size: 1em;
  width: 100%;
  padding-top: 100%;
  padding-bottom: 50%;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -1px;
    left: 45%;
    width: 10%;
    text-align: center;
    z-index: 1;
    border-bottom: 2px solid #fff;
  }

  -webkit-transition: top 0.2s ease-out, bottom 0.2s ease-out,
    0.2s padding 0.2s ease-out;
  -ms-transition: top 0.2s ease-out, bottom 0.2s ease-out,
    0.2s padding 0.2s ease-out;
  transition: top 0.2s ease-out, bottom 0.2s ease-out,
    0.2s padding 0.2s ease-out;

  @media (max-width: 600px) {
    bottom: 0%;
    padding-bottom: 40%;
    font-size: 10px;
    vertical-align: middle;
  }
`
export default ({ children }) =>
  <h4 className={`${hexHeader4Style}`}>{children}</h4>


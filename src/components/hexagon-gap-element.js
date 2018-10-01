import React from 'react'
import { css } from 'emotion'

const pusherElement = css`
  background: rgba(0, 0, 0, 0) !important;
`

export default ({ index }) => (
  <li className={`pusher ${pusherElement}`} key={`gap-${index}`} />
)

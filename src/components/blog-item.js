import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const blogPostStyle = css`
  width: 300px;
  height: 80px;
  margin-right: 10px;
  margin-bottom: 19px;
  border-radius: 3px;
  padding: 2px 10px;
`

const blogPostTitleStyle = css`
  color: #222;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-size: 1.3rem;
  line-height: 1.4rem;
  border: 2px solid #666;
  border-radius: 10px;
  padding: 10px;
  height: 80px;
  overflow: hidden;
`

const dateContainerStyle = css`
  color: black;
  font-family: Arial,Helvetica,sans-serif;
  text-align: right;
  margin-right: 10px;
  position: relative;
  bottom: 30px;
`

class BlogItem extends React.Component {
  render() {
    return (
      <Link
        style={{ boxShadow: 'none', color: '#444' }}
        to={this.props.node.fields.slug}
      >
        <div
          key={this.props.node.fields.slug}
          className={`${blogPostStyle}`}
        >
          <div className={`${blogPostTitleStyle}`}>{this.props.title}</div>
          <div className={`${dateContainerStyle}`}>
            <small>{this.props.node.frontmatter.date}</small>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem

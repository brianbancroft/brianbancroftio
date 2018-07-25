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

class BlogItem extends React.Component {
  render() {
    const BlogItem = props => {
      return (
        <Link
          style={{ boxShadow: 'none', color: '#444' }}
          to={props.node.fields.slug}
        >
          <div
            key={props.node.fields.slug}
            className={`${blogPostStyle}`}
            style={{
              backgroundImage: `url(${props.node.fields.preview ||
                defaultPreview})`,
              backgroundSize: 'cover',
            }}
          >
            <div className={`${blogPostTitleStyle}`}>{props.title}</div>
            <div className={`${dateContainerStyle}`}>
              <small>{props.node.frontmatter.date}</small>
            </div>
          </div>
        </Link>
      )
    }
  }
}

export default BlogItem

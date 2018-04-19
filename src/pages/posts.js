import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const title = node => get(node, 'frontmatter.title') || node.fields.slug
    const defaultPreview = 'https://s3.amazonaws.com/cdn.brianbancroft.io/assets/blogitem.jpg'

    const BlogItem = props => {
    return (
      <Link style={{ boxShadow: 'none', color: '#444'}} to={props.node.fields.slug} >
        <div key={props.node.fields.slug} className="blogposts-container__blogpost" style={{backgroundImage: `url(${props.node.fields.preview || defaultPreview})`, backgroundSize: 'cover'}}>
          <div className="blogpost-title">
              {props.title}
          </div>
          <div className="date-container" style={{textAlign: 'right', marginRight: '10px'}}>
            <small>{props.node.frontmatter.date}</small>
          </div>
        </div>
      </Link>
    )}

    return (
      <div className="blogposts-container">
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => <BlogItem title={title(node)} node={node} key={node.fields.slug}/> )}
      </div>
    )
  }
}

export default BlogIndex

export const postsPageQuery = graphql`
  query postsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            preview
          }
        }
      }
    }
  }
`

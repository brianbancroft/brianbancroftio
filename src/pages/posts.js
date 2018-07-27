import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from 'emotion'

const blogPostContainerStyle = css`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

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

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const title = node => get(node, 'frontmatter.title') || node.fields.slug
    const defaultPreview =
      'https://s3.amazonaws.com/cdn.brianbancroft.io/assets/blogitem.jpg'

    const BlogItem = props => {
      return (
        <Link
          style={{ boxShadow: 'none', color: '#444' }}
          to={props.node.fields.slug}
        >
          <div
            key={props.node.fields.slug}
            className={`${blogPostStyle}`}
          >
            <div className={`${blogPostTitleStyle}`}>{props.title}</div>
            <div className={`${dateContainerStyle}`}>
              <small>{props.node.frontmatter.date}</small>
            </div>
          </div>
        </Link>
      )
    }

    return (
      <div className={`${blogPostContainerStyle}`}>
        <Helmet title='Posts | Brian Bancroft' />
        {posts.map(({ node }) => (
          <BlogItem title={title(node)} node={node} key={node.fields.slug} />
        ))}
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
      sort: { fields: [frontmatter___date], order: DESC }
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

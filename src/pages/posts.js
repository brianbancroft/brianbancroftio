import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from 'emotion'
import BlogItem from '../components/BlogItem'

const blogPostContainerStyle = css`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const title = node => get(node, 'frontmatter.title') || node.fields.slug

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

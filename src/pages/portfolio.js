import React from 'react'
import { navigateTo } from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import HexagonContainer from '../components/HexagonContainer'

class PortfolioIndex extends React.Component {
  render() {
    const portfolioItems = get(this, 'props.data.allMarkdownRemark.edges')
    const addGapElement = () => parseInt(Math.random() * 7) === 5
    const gapElement = <li className="pusher" />

    const portfolioGallery = portfolioItems => {
      let galleryElements = []
      portfolioItems.forEach(i => {
        galleryElements.push(portfolioItem(i))
        if (addGapElement()) {
          galleryElements.push(gapElement)
        }
      })
      return galleryElements
    }

    const portfolioItem = i => {
      const title = get(i, 'node.frontmatter.title') || i.node.fields.slug
      return (
        <HexagonContainer
          id={i.node.fields.slug}
          title={title}
          backgroundImage={i.node.frontmatter.preview}
          clickAction={() => navigateTo(i.node.fields.slug)}
        />
      )
    }

    return (
      <div style={{ marginTop: '70px' }}>
        <Helmet title="Portfolio | Brian Bancroft" />
        <ul id="categories" className="clr">
          {portfolioGallery(portfolioItems)}
        </ul>
      </div >
    )
  }
}

export default PortfolioIndex
export const portfolioPageQuery = graphql`
  query portfolioPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/portfolio/" } }
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

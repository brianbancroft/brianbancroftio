import React from 'react'
import { get } from 'lodash'
import Helmet from 'react-helmet'

import { HexagonGapElement, PortfolioItem } from '../components'
import { addGapElement } from '../helpers'

class PortfolioIndex extends React.Component {
  render() {
    const galleryElements = []
    const portfolioItems = get(this, 'props.data.allMarkdownRemark.edges')
    portfolioItems.forEach((item, key) => {
      galleryElements.push(<PortfolioItem item={item} key={key} index={key} />)
      if (addGapElement()) {
        galleryElements.push(<HexagonGapElement index={key} />)
      }
    })

    return (
      <div style={{ marginTop: '70px' }}>
        <Helmet title="Portfolio | Brian Bancroft" />
        <ul id="categories" className="clr">
          {galleryElements}
        </ul>
      </div>
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

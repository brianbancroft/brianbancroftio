import React from 'react'
import { navigateTo } from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class PortfolioIndex extends React.Component {
   render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const portfolioItems = get(this, 'props.data.allMarkdownRemark.edges')

    const samplePortfolioContent = [
      {
        key: 1,
        img: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 2,
        img: 'https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 3,
        img: 'https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 4,
        img: 'https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 5,
        img: 'https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 6,
        img: 'https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 7,
        img: 'https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 8,
        img: 'https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 9,
        img: 'https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 10,
        img: 'https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 11,
        img: 'https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }, {
        key: 12,
        img: 'https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg',
        h1: 'Portfolio Title',
        p: 'A short description of the item...'
      }
    ]

    const addGapElement = () => parseInt(Math.random() * 7) === 5
    const gapElement = <li className="pusher"></li>

    const portfolioGallery = portfolioItems => {
      let galleryElements = []
      portfolioItems.forEach(i => {
        galleryElements.push(portfolioItem(i))
        if (addGapElement()) {galleryElements.push(gapElement)}
      })
      return galleryElements
    }

    const portfolioItem = i => {
      const title = get(i, 'node.frontmatter.title') || i.node.fields.slug
      return (
        <li
          key={i.node.fields.slug}
          onClick={ () => navigateTo(i.node.fields.slug)}
          style={{cursor: 'pointer'}}
        >
          <div style={{backgroundImage: `url(${i.node.frontmatter.preview})`}}>
            <h4 className="hex-title">{title}</h4>
          </div>
        </li>
      )
    }

    return (
      <div style={{marginTop: '70px'}}>
        <Helmet title={siteTitle} />
        <ul id="categories" className="clr">
          {portfolioGallery(portfolioItems)}
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
      sort: { fields: [frontmatter___date], order: DESC },
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

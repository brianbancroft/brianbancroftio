import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

import Styles from './portfolio.module.css'

class PortfolioIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <ul id="hexGrid">
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </div>
          </li>
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
          }
        }
      }
    }
  }
`

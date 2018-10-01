## bancroft.io

Procrastination from actually writing copy. My main portfolio and blog site

## Why Gatsby?

* It's overkill, but I required to grok React components after being in an EmberJS mindset
* I spend too much time in Ruby and not enough time with CSS/JS
* This got to be my first crack using GraphQL
* Also my first crack at CSS-IN-JS using Emotion

## What remains

* [x] Image layout for blog posts
* [x] Try to integrate the [Responsive Grid of Hexagons](https://github.com/web-tiki/responsive-grid-of-hexagons) into the portfolio page
* [x] Bottom linking in the blog/portfolio (issue fixed, hiding content for simplicity)
  * [x] IF no newer article, go to twitter to see me rant?
  * [x] If no newer portfolio piece, go to stumbleupon
  * [x] Link to portfolio/blog in centre of bottom-links.
* [x] Clean up all stateless components.
* [x] Chose a different typeface for the following:
  * [x] Blog Posts
  * [x] Portfolio Pieces
  * [x] Remainder of the site
* [x] ~Clean circleCI Yaml for clarity~ _Migrated to Netlify_
* [x] Linting
  * [x] ESLint
  * [x] Prettier
  * [x] ~Integrate lint checks into CircleCI~ _migrated to netlify_
* [ ] Fix bottom links
  * they appear on the left for initial render...

## Running

* First, get the packages -> `yarn install`
* Run in develop -> `gatsby develop`
* Build -> `gatsby build`
* Serve -> `gatsby serve`

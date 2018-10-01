---
title: This Website
date: "2018-04-20T10:12:03.284Z"
headerImage: https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/gatsby-site/gatsby.png
preview: https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/gatsby-site/gatsby.png
---


Why
---
Over the last year, I worked almost exclusively in Ember. Before that, it was mainly Vue. I wanted to find a way to build a new portfolio site that was a step up from my usual ruby/jekyll setup that used the best parts of the modern JS ecosystem. Enter [Gatsby](gatsbyjs.org)! Gatsby is another static-site generator that's been deemed as 'overkill' for building static sites, but I saw it as an opportunity to mess around a bit with ReactJS in an ecosystem where I could focus more on building and less on tooling.

Lessons Learned
---

This started as a challenge to build, but with a strong ecosystem of plugins, and the efficient use of GraphQL to build queries based on the app's filestructure, I feel confident that I can build and extend this well beyond any intended scope if desired. One direction I can see myself taking this site is into component-based portfolios for packaging designers.

This portfolio site showcases a few things:
- [Building components in React](https://github.com/brianbancroft/brianbancroftio/blob/develop/src/pages/contact.js)
- Using GraphQL to separate between [blog](https://github.com/brianbancroft/brianbancroftio/blob/develop/src/pages/posts.js) posts and [portfolio](https://github.com/brianbancroft/brianbancroftio/blob/develop/src/pages/portfolio.js) pieces
- Using AWS S3 to host both static websites
- Using AWS S3 to act as a CDN in concert with Cloudfront ([beep beep!](https://cdn.brianbancroft.io/star_wars_bb8.png))
- [Deployment of content using CircleCI](https://github.com/brianbancroft/brianbancroftio/blob/develop/.circleci/config.yml)
- Minimal UI. Being able to navagate clearly on mobile is more important than flashy animation

After building this portfolio, I'm also confident in the following:
- Various methods of CSS, including:
    - CSS-in-JS
    - Styled Components
    - Module-scoped CSS
- Ideal image sizes
    - Some parts of this site are still not perfect yet. That will gradually change.
    - But I have a handle on best practices from what I've observed.

You can check out the source code directly here: [repo](https://github.com/brianbancroft/brianbancroftio/tree/develop/src)
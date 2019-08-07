# egghead Blog

This blog theme has social sharing and seo build in, dark mode, and mdx support.

## Getting Started

This guide will take you through how to set up a blog with this theme.

### Installation

```bash
# make your blog folder
mkdir blog && cd blog

# init a new package.json
yarn init

# add dependencies
yarn add -D react react-dom gatsby @eggheadio/gatsby-theme-egghead-blog

touch gatsby-config.js
```

```js
// add the them
module.exports = {
  plugins: [`@eggheadio/gatsby-theme-egghead-blog`],
}
```

We will walk through the `siteMetadata` this theme expects and how to change the default path to your blog posts.

# egghead Blog

This blog theme has social sharing and seo build in, dark mode, and mdx support.

## Getting Started

This guide will take you through how to set up a blog with this theme.

### Step 1: Installation

```bash
# make your site folder
mkdir your-site && cd your-site

# init a new package.json
yarn init

# add dependencies
yarn add -D react react-dom gatsby @eggheadio/gatsby-theme-egghead-blog

touch gatsby-config.js
```

```js
// add the theme to your gatsby config
module.exports = {
  plugins: [`@eggheadio/gatsby-theme-egghead-blog`],
}
```

We will walk through the `siteMetadata` this theme expects and how to change the default path to your blog posts.

### Step 2: Folder Structure

This is the default folder structure that we recommend:

```
your-site/
├── README.md
├── config
│   └── website.js
├── content
│   └── posts
│       ├── demo01
│       │   ├── HelloWorld.js
│       │   ├── banner.png
│       │   └── index.mdx
│       ├── demo02
│       └── frontmatter-placeholder
│           ├── images
│           │   └── banner.jpg
│           └── index.md
├── gatsby-config.js
├── node_modules
├── package.json
```

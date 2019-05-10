# gatsby-theme-egghead-blog
This is a [theme](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/) version of our [gatsby-starter-egghead-blog](https://github.com/eggheadio/gatsby-starter-egghead-blog).

## Installation

```
yarn add -D @eggheadio/gatsby-theme-egghead-blog
```

## Using the theme
Themes are in development so we have to use themes with `__expetimentalTheme` like this in our `gatsby-config.js`:

```
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "YOUR SITE TITLE",
    author: {
      name: "YOUR NAME"
    },
    description: "A DESCRIPTION",
    siteUrl: "YOUR INTENDED URL"
  },
  __experimentalThemes: ['@eggheadio/gatsby-theme-egghead-blog'],
}
```

Now you will get all the functionality in your blog with a `gatsby-config.js` file and a `content/` directory.

Your example project will look like this:
```
content/
  blog/
    post1/
      index.md
    post2/
      index.md
    post3/
      index.md
gatsby-config.js
package.json
```

The markdown files expect optional frontmatter fields like the below:

```md
---
title: My Blogpost
slug: my-blogpost
date: 2019-09-05
published: true
description: a blogpost description
banner: null
categories: blog, post
keywords: blogging, posting
---
```

## Override theme components (Component Shadowing)

To override a theme component, you will need to add `src/gatsby-theme-egghead-blog`. You may override anything in the `gatsby-theme-egghead-blog/src` directory.

For example, if you would like to override the default `Header` component:

```js
// src/gatsby-theme-egghead-blog/Header.js
import React from 'react'

class Header extends React.Component {
    render(){
        return (
            <div>hello egghead</div>
            )
    }
}

export default Header
```

Now "hello egghead" will be rendered anywhere the old Header component was render.

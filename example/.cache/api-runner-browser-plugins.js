module.exports = [{
      plugin: require('/Users/ianjones/Code/gatsby-theme-egghead-blog/node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md",".markdown"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"backgroundColor":"#fafafa","maxWidth":1035}}]},
    },{
      plugin: require('/Users/ianjones/Code/gatsby-theme-egghead-blog/node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ianjones/Code/gatsby-theme-egghead-blog/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"GOOGLE_ID"},
    },{
      plugin: require('/Users/ianjones/Code/gatsby-theme-egghead-blog/node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"/Users/ianjones/Code/gatsby-theme-egghead-blog/packages/gatsby-theme-egghead-blog/src/lib/typography.js"},
    },{
      plugin: require('/Users/ianjones/Code/gatsby-theme-egghead-blog/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]

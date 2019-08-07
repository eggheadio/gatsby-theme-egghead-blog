const config = require('./config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterUrl: config.twitterUrl,
    twitterHandle: config.twitterHandle,
    fbAppID: config.fbAppID,
    githubUrl: config.githubUrl,
    githubHandle: config.githubHandle,
    description: config.siteDescription,
    keywords: ['Video Blogger'],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: `
        <strong>egghead</strong> is the premier place on the internet for 
        experienced developers to enhance their skills and stay current
        in the fast-faced field of web development.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
  },
  plugins: [{resolve: `gatsby-theme-egghead-blog`, options: {config}}],
}

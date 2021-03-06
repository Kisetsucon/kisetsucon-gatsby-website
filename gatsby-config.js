module.exports = {
  siteMetadata: {
    title: `Kisetsucon 2021`,
    description: `Annual WNY Asian Pop-Culture Convention`,
    author: `@Kisetsucon`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rules`,
        path: `${__dirname}/src/markdown/rules`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `policies`,
        path: `${__dirname}/src/markdown/policies`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `guests`,
        path: `${__dirname}/src/markdown/guests`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kisetsucon Website`,
        short_name: `Kisetsucon`,
        start_url: `/`,
        background_color: `#ec9d57`,
        theme_color: `#ec9d57`,
        display: `minimal-ui`,
        icon: `src/images/kisetsucon-logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Material Icons`,
          `Roboto`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}

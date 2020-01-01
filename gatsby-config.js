module.exports = {
  siteMetadata: {
    title: `Jeremy Yip's Website`,
    description: `Jeremy Yip's Website`,
    author: `Jeremy Yip`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          "@": "./",
          // "@components": "./components", // <- will become ./src/components
          // helpers: "./helpers", // <- will become ./src/helpers
          // static: {
          //   root: "./public", // <- will used as this alias' root dir
          //   alias: "./static", // <- will become ./public/static
          // },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon-black.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

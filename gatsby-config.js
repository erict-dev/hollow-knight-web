module.exports = {
  siteMetadata: {
    title: `Hollow Knight – An atmospheric adventure through a surreal, bug-infested world`,
    description: `Hollow Knight is a challenging 2D action-adventure. You'll explore twisting caverns, battle tainted creatures and escape intricate traps, all to solve an ancient long-hidden mystery. - Explore vast, Inter-connected Worlds.`,
    author: `Team Cherry`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hollow Knight Website`,
        short_name: `Hollow Knight`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cropped-knight_head-192x192.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142461982-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        optimizeId: "",
        // Enables Google Optimize Experiment ID
        experimentId: "",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: ""
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

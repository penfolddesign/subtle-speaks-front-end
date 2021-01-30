require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Subtle Speaks`,
    description: `Community Driven Innovation. Subtle Speaks CIC, Birmingham.`,
    author: `https://penfolddesign.co.uk`,
    siteURL: `https://subtle-speaks.co.uk`
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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {

      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
        ? "https://subtle-speaks-back-end.herokuapp.com"
        : "http://localhost:1337",
        contentTypes: [`blog-posts`, `users`, `categories`, `projects`, `research-projects`],
        singleTypes: [`about-section`, `global-settings`, `partner-logos`, `research-section`, `landing-hero`],
        queryLimit: 5000,

      },

    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    // {
    // resolve: `gatsby-plugin-manifest`,
    // options:{
    //   name: `subtle-speaks-cic-2021`,
    //   short_name:`speaks-gatsby`,
    //   display: `minimal-ui`,
    // },
  
  
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Code for Chicago Gatsby`,
    siteUrl: `https://www.codeforchicago.org`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro:300,400,700,900'],
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `x2mv54jv`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}

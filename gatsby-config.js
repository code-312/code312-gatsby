require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Code for Chicago Gatsby`,
    siteUrl: `https://www.codeforchicago.org`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./images/uploads/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `./_posts/portfolio`,
      },
      __key: `portfolio`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `./_posts/projects`,
      },
      __key: `projects`,
    },
  ],
}

const slugify = require('slugify')

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query AllProjects {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "project" } } }
      ) {
        nodes {
          frontmatter {
            title
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
            date
            imgtext
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = `projects/${slugify(node.frontmatter.title, { lower: true })}`
    const title = node.frontmatter.title
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/project.jsx`),
      context: { title: title },
    })
  })
}

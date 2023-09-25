// const slugify = require('slugify')

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query AllProjects {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             title
//             description
//             layout
//             thumbnail {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//             date
//             imgtext
//           }
//         }
//       }
//     }
//   `)

//   data.allMarkdownRemark.nodes.forEach((node) => {
//     const slug = `${node.frontmatter.layout}/${slugify(node.frontmatter.title, {
//       lower: true,
//     })}`
//     const title = node.frontmatter.title
//     actions.createPage({
//       path: slug,
//       component: require.resolve(
//         `./src/templates/${node.frontmatter.layout}.jsx`
//       ),
//       context: { title: title },
//     })
//   })
// }

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Project({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      id
      html
      frontmatter {
        date
        description
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        imgtext
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default function Portfolio({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        hi hi
        {/* <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    sanityPortfolio(id: { eq: $id }) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      overview {
        children {
          text
        }
      }
      methodology {
        children {
          text
        }
      }
      subHeading
    }
  }
`

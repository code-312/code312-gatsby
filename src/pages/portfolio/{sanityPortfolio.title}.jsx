import React from 'react'
import { graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import Layout from '../../components/Layout'

export default function Portfolio({ data }) {
  console.log(data)
  const portfolio = data.sanityPortfolio

  return (
    <Layout>
      <h2>{portfolio.title}</h2>
      <h3>Overview</h3>
      <PortableText value={portfolio.overview} />
      <h3>Methodology</h3>
      <PortableText value={portfolio.methodology} />
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
        _rawChildren(resolveReferences: { maxDepth: 10 })
      }
      methodology {
        _rawChildren(resolveReferences: { maxDepth: 10 })
      }
      subHeading
    }
  }
`

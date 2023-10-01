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
      <PortableText value={portfolio._rawOverview} />
      <PortableText value={portfolio._rawMethodology} />
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
      _rawOverview(resolveReferences: { maxDepth: 10 })
      _rawMethodology(resolveReferences: { maxDepth: 10 })
      subHeading
    }
  }
`

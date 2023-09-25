import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default function Project({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>hi</div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    sanityProject(id: { eq: $id }) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      aboutThisProject {
        children {
          text
        }
      }
      aboutThisPartner {
        children {
          text
        }
      }
      active
      availability
      commitment
      deliverable
      filledPositions {
        positionTitle
        positionDescription
      }
      openPositions {
        positionTitle
        positionDescription
      }
      problemToSolve {
        children {
          text
        }
      }
      primaryContact {
        name
        title
        slug {
          current
        }
      }
      projectLinks {
        link
        linkType
      }
      techStack
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const StyledProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 22rem;
`

const StyledRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 39.5rem;
`

export default function Project({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="width-wrapper">
        <StyledProject>
          <StyledLeftColumn>
            <GatsbyImage
              image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
              alt={post.frontmatter.imgtext}
            />
          </StyledLeftColumn>
          <StyledRightColumn>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </StyledRightColumn>
        </StyledProject>
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

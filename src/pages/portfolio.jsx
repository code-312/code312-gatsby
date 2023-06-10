import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardBlock from '../components/CardBlock'
import ContactUs from '../components/ContactUs'
import Hero from '../components/Hero'

import styled from 'styled-components'

const StyledSection = styled.div`
  padding-top: 4rem;
`

const Portfolio = ({ data }) => {
  const showCards = data.allMarkdownRemark.nodes.map((node, idx) => {
    const { thumbnail, title, imgtext } = node.frontmatter
    return (
      <Card
        imgUrl={thumbnail.childImageSharp}
        imageDescription={'project thumbnail'}
        mainHeading={title}
        content={imgtext}
        key={idx}
      />
    )
  })
  return (
    <Layout>
      <Hero
        eyebrowText="Case Studies"
        mainHeading="Learn how we finish volunteer-led projects"
      />
      <StyledSection>
        <CardBlock>{showCards}</CardBlock>
      </StyledSection>
      <ContactUs />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "portfolio" } } }
    ) {
      nodes {
        frontmatter {
          title
          layout
          imgtext
          date
          areas
          alt
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Portfolio

export const Head = () => <title>Porfolio</title>

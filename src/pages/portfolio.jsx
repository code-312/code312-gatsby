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
  const cards = data.allSanityPortfolio.nodes.map((portfolio, idx) => {
    const { mainImage, title, subHeading } = portfolio
    return (
      <Card
        imgUrl={mainImage?.asset.gatsbyImage}
        imageDescription={title}
        mainHeading={title}
        content={subHeading}
        linkUrl={`/portfolio/${portfolio.slug.current}`}
        linkText="Learn More"
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
        <CardBlock>{cards}</CardBlock>
      </StyledSection>
      <ContactUs bgBlue />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioListQuery {
    allSanityPortfolio {
      nodes {
        title
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImage(width: 280)
          }
        }
        subHeading
      }
    }
  }
`

export default Portfolio

export const Head = () => <title>Portfolio</title>

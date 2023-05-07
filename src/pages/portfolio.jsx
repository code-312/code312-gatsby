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
  const showCards = (data, isActive = true) => {
    return data.allMarkdownRemark.nodes.map((info) => {
      const { title, thumbnail, areas, imgtext } = info.frontmatter
      if (isActive && areas.toLowerCase() !== 'not actively recruiting')
        return <Card imgUrl={thumbnail} mainHeading={title} content={imgtext} />
      if (!isActive && areas.toLowerCase() === 'not actively recruiting')
        return <Card imgUrl={thumbnail} mainHeading={title} content={imgtext} />
    })
  }
  return (
    <Layout>
      <Hero
        eyebrowText="Case Studies"
        mainHeading="Learn how we finish volunteer-led projects"
      />
      <StyledSection>
        <CardBlock>{showCards(data)}</CardBlock>
      </StyledSection>
      <ContactUs />
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query portfolioQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "portfolio" } } }
    ) {
      nodes {
        frontmatter {
          title
          thumbnail
          areas
          imgtext
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Card from '../components/Card'
import CardBlock from '../components/CardBlock'
import Heading from '../components/Heading'
import Hero from '../components/Hero'

import styled from 'styled-components'

const StyledSection = styled.div`
  background-color: var(--light-grey);
  padding-bottom: 4rem;
`

const Projects = ({ data }) => {
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
        eyebrowText="Active Projects"
        mainHeading="Explore active projects to get involved"
      />
      <Heading
        browText="NEEDS VOLUNTEERS"
        headingText="Currently Recruiting"
        description="These projects are actively recruiting for new volunteers."
        headingLevel="3"
      />
      <CardBlock>{showCards(data)}</CardBlock>
      <StyledSection>
        <Heading
          browText="TEAMS AT CAPACITY"
          headingText="Not Recruiting"
          description="These projects are active, but don’t have room for additional volunteers."
          headingLevel="3"
        />
        <CardBlock>{showCards(data, false)}</CardBlock>
      </StyledSection>

      <Hero
        eyebrowText="Voluteer Registration"
        mainHeading="Learn more on how you can join a project."
        buttonText="Volunteer With Us"
        arrow
      />
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query projectsQuery {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "project" } } }) {
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

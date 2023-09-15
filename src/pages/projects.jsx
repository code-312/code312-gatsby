import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import CardBlock from '../components/CardBlock'
import Card from '../components/Card'
import Layout from '../components/Layout'
import styled from 'styled-components'

const StyledSection = styled.section`
  background-color: var(--light-grey);
`
const HeadingWrapper = styled.section`
  padding: 4rem 1.5rem 1.5rem;
`

const ProjectsPage = ({ data }) => {
  let newActiveList = []
  let newInactiveList = []

  for (const project of data.allMarkdownRemark.nodes) {
    if (project.frontmatter.areas.toLowerCase() === 'not actively recruiting') {
      let newInactive = Object.create(null)
      newInactive.mainHeading = project.frontmatter.title
        ? project.frontmatter.title
        : null
      newInactive.content = project.frontmatter.description
        ? project.frontmatter.description
        : null
      newInactiveList.push(newInactive)
    } else {
      let newActive = Object.create(null)
      newActive.imgUrl =
        project.frontmatter.thumbnail &&
        project.frontmatter.thumbnail.childImageSharp
          ? project.frontmatter.thumbnail
          : null
      newActive.imageDescription = project.frontmatter.alt
        ? project.frontmatter.alt
        : null
      newActive.mainHeading = project.frontmatter.title
        ? project.frontmatter.title
        : null
      newActive.content = project.frontmatter.description
        ? project.frontmatter.description
        : null
      newActive.labels = project.frontmatter.areas
        ? project.frontmatter.areas.split(', ')
        : null
      newActive.linkUrl = project.frontmatter.thumbnail
        ? project.frontmatter.thumbnail
        : null
      newActive.linkText = project.frontmatter.alt
        ? project.frontmatter.alt
        : null
      newActiveList.push(newActive)
    }
  }

  return (
    <Layout>
      <Hero
        eyebrowText="PROJECTS"
        mainHeading="Explore active projects to get involved"
      />
      <HeadingWrapper>
        <Heading
          browText="Needs volunteers"
          headingText="Currently Recruiting"
          description="These projects are actively recruiting for new volunteers."
          headingLevel="3"
        />
      </HeadingWrapper>
      <CardBlock>
        {newActiveList?.map((project) => {
          return (
            <Card
              key={project.mainHeading}
              imgUrl={project.imgUrl}
              imageDescription={project.imageDescription}
              mainHeading={project.mainHeading}
              content={project.content}
              labels={project.labels}
            />
          )
        })}
      </CardBlock>
      <StyledSection>
        <HeadingWrapper>
          <Heading
            browText="Teams At Capacity"
            headingText="Not Recruiting"
            description="These projects are active, but don't have room for additional volunteers."
            headingLevel="3"
          />
        </HeadingWrapper>
        <CardBlock>
          {newInactiveList.map((project) => {
            return (
              <Card
                key={project.mainHeading}
                imgUrl={project.imgUrl}
                imageDescription={project.imageDescription}
                mainHeading={project.mainHeading}
                content={project.content}
                labels={project.labels}
                linkUrl={project.linkUrl}
                linkText={project.linkText}
              />
            )
          })}
        </CardBlock>
      </StyledSection>
      <Hero
        mainHeading="Learn more on how you can join a project"
        buttonText="Volunteer With Us"
        link="/join"
        arrow
      />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioListQuery {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "project" } } }) {
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

export default ProjectsPage

export const Head = () => <title>Projects</title>

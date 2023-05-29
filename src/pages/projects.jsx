import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import CardBlock from '../components/CardBlock'
import Card from '../components/Card'
import Layout from '../components/Layout'

const StyledSection = styled.section`
  background-color: var(--light-grey);
  `

const ProjectsPage = ({ data }) => {
  const activeRaw = []
  const inactiveRaw = []
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
      // inactiveRaw.push(project)
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
      newActive.linkText = project.frontmatter.alt ? project.frontmatter.alt : null
      newActiveList.push(newActive)
      // activeRaw.push(project)
    }
  }

  //loop through activeRaw and create new objects to match props format of CARD component

  for (const active of activeRaw) {
    let newActive = Object.create(null)
    newActive.imgUrl =
      active.frontmatter.thumbnail &&
      active.frontmatter.thumbnail.childImageSharp
        ? active.frontmatter.thumbnail
        : null
    newActive.imageDescription = active.frontmatter.alt
      ? active.frontmatter.alt
      : null
    newActive.mainHeading = active.frontmatter.title
      ? active.frontmatter.title
      : null
    newActive.content = active.frontmatter.description
      ? active.frontmatter.description
      : null
    newActive.labels = active.frontmatter.areas
      ? active.frontmatter.areas.split(', ')
      : null
    newActive.linkUrl = active.frontmatter.thumbnail
      ? active.frontmatter.thumbnail
      : null
    newActive.linkText = active.frontmatter.alt ? active.frontmatter.alt : null
    newActiveList.push(newActive)
  }

  //loop through inactiveRaw list and create new objects to match props of tileGrid & tileCard.  ONLY NEED TITLE/title & DESCRIPTION/description

  for (const inactive of inactiveRaw) {
    let newInactive = Object.create(null)
    newInactive.mainHeading = inactive.frontmatter.title
      ? inactive.frontmatter.title
      : null
    newInactive.content = inactive.frontmatter.description
      ? inactive.frontmatter.description
      : null
    newInactiveList.push(newInactive)
  }

  return (
    <Layout>
      <Hero
        eyebrowText="PROJECTS"
        mainHeading="Explore active projects to get involved"
      />
      <Heading
        browText="Needs volunteers"
        headingText="Currently Recruiting"
        description="These projects are actively recruiting for new volunteers."
        headingLevel="3"
      />
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
        <Heading
          browText="Teams At Capacity"
          headingText="Not Recruiting"
          description="These projects are active, but don't have room for additional volunteers."
          headingLevel="3"
        />
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

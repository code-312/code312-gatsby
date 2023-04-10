import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import CardBlock from '../components/CardBlock'
import Card from '../components/Card'
import Layout from '../components/Layout'
import IconGrid from '../components/IconGrid'
// import CfCSite from '../images/projects/TestImage.png'
// import voma from '../images/projects/TestImage.png'
// import rescue from '../images/projects/TestImage.png'
// import ccst from '../images/projects/TestImage.png'

const StyledSection = styled.section`
  background-color: var(--light-grey);
`

const ProjectsPage = ({ data }) => {
  const activeRaw = []
  const inactiveRaw = []

  //loop through data and separate out active and inactive projects

  for (const project of data.allMarkdownRemark.nodes) {
    if (project.frontmatter.areas.toLowerCase() === 'not actively recruiting') {
      inactiveRaw.push(project)
    } else {
      activeRaw.push(project)
    }
  }

  //loop through activeRaw and create new objects to match props format of CARD component

  let newActiveList = []
  for (const active of activeRaw) {
    let newActive = Object.create(null)
    newActive.imgUrl = active.frontmatter.thumbnail
      ? `../src${active.frontmatter.thumbnail}`
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

  console.log(newActiveList)
  //loop through inactiveRaw list and create new objects to match props of tileGrid & tileCard.  ONLY NEED TITLE/title & DESCRIPTION/description
  let newInactiveList = []

  for (const inactive of inactiveRaw) {
    let newInactive = Object.create(null)
    newInactive.title = inactive.frontmatter.title
      ? inactive.frontmatter.title
      : null
    newInactive.description = inactive.frontmatter.description
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
        {newActiveList.map((project) => {
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
        {/* <Card
          imgUrl={rescue}
          mainHeading="Rescue Chicago"
          content="Building an interactive data visualization dashboard to explore how different dog characteristics affect the average length of stay."
        /> */}
      </CardBlock>
      <StyledSection>
        <Heading
          browText="Teams At Capacity"
          headingText="Not Recruiting"
          description="These projects are active, but don't have room for additional volunteers."
          headingLevel="3"
        />
        <IconGrid icons={newInactiveList} />
      </StyledSection>
      <Hero
        mainHeading="Learn more on how you can join a project"
        buttonText="Join A Project"
        link="/join"
        arrow
      />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioListQuery {
    allMarkdownRemark(filter: { frontmatter: {} }) {
      nodes {
        frontmatter {
          title
          layout
          date
          thumbnail
          imgtext
          alt
          description
          areas
        }
      }
    }
  }
`

export default ProjectsPage

export const Head = () => <title>Projects</title>

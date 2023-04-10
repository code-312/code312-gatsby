import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import CardBlock from '../components/CardBlock'
import Card from '../components/Card'
import Layout from '../components/Layout'
import IconGrid from '../components/IconGrid'
import CfCSite from '../images/projects/TestImage.png'
import voma from '../images/projects/TestImage.png'
import rescue from '../images/projects/TestImage.png'
import ccst from '../images/projects/TestImage.png'

const StyledSection = styled.section`
  background-color: var(--light-grey);
`

const ProjectsPage = ({ data }) => {
  const activeRaw = []
  const inactiveRaw = []

  console.log(data)

  for (const project of data.allMarkdownRemark.nodes) {
    if (project.frontmatter.areas.toLowerCase() === 'not actively recruiting') {
      inactiveRaw.push(project)
    } else {
      activeRaw.push(project)
    }
  }

  console.log(inactiveRaw, activeRaw)
  let newActiveList = []

  for (const active of activeRaw) {
    let newActive = Object.create(null)
    newActive.imageUrl = active.frontmatter.thumbnail
      ? `... + ${active.frontmatter.thumbnail}`
      : null
    newActive.imageDescription = active.frontmatter.alt ? active.frontmatter.alt : null
    newActive.mainHeading = active.frontmatter.title ? active.frontmatter.title : null
    newActive.content = active.frontmatter.description
      ? active.frontmatter.description
      : null
    newActive.labels = active.frontmatter.areas
      ? active.frontmatter.areas.split(', ')
      : null
    newActiveList.push(newActive)
  }

  console.log(newActiveList)

  const icons = [
    {
      title: 'Cannabis Equity Illinois Coalition',
      description: 'Website redesign and build.',
    },
  ]


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
        <Card
          imgUrl={rescue}
          mainHeading="Rescue Chicago"
          content="Building an interactive data visualization dashboard to explore how different dog characteristics affect the average length of stay."
        />
        <Card
          imgUrl={CfCSite}
          mainHeading="Code for Chicago Website"
          content="Designing and building the Code for Chicago website and design system."
        />
        <Card
          imgUrl={voma}
          mainHeading="Voma"
          content="Building a better volunteer management tool for the Code for America Brigade network."
        />
        <Card
          imgUrl={ccst}
          mainHeading="Chicago Council on Science and Technology"
          content="Transition the org\’s website from Wordpress to Wix. Improve the exisitng designs and develop it on the Wix platform."
        />
      </CardBlock>
      <StyledSection>
        <Heading
          browText="Teams At Capacity"
          headingText="Not Recruiting"
          description="These projects are active, but don't have room for additional volunteers."
          headingLevel="3"
        />
        <IconGrid icons={icons} />
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

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
  console.log(data)
  const activeProjects = data.allSanityProject.nodes.filter(
    (project) => project.active === true
  )

  const inactiveProjects = data.allSanityProject.nodes.filter(
    (project) => project.active !== true
  )

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
        {activeProjects.length > 0 ? (
          activeProjects.map((project) => {
            return (
              <Card
                key={project.title}
                imgUrl={project.mainImage.asset.gatsbyImage}
                imageDescription={project.title}
                mainHeading={project.title}
                content={project.aboutThisProject[0].children[0].text}
                linkUrl={`/project/${project.slug.current}`}
                linkText="Learn More"
              />
            )
          })
        ) : (
          <p>No active projects</p>
        )}
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
          {inactiveProjects.length > 0 ? (
            inactiveProjects.map((project) => {
              return (
                <Card
                  key={project.title}
                  imgUrl={project.mainImage.asset.gatsbyImage}
                  imageDescription={project.title}
                  mainHeading={project.title}
                  content={project.aboutThisProject[0].children[0].text}
                  linkUrl={`/projects/${project.slug.current}`}
                />
              )
            })
          ) : (
            <p>Currently no inactive projects</p>
          )}
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
  query ProjectListQuery {
    allSanityProject {
      nodes {
        title
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImage(width: 258)
          }
        }
        aboutThisProject {
          children {
            text
          }
        }
        active
      }
    }
  }
`

export default ProjectsPage

export const Head = () => <title>Projects</title>

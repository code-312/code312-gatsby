import React from 'react'
import { graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import IconTile from '../../components/IconTile'
import calendardays from '../../images/icons/calendardays.svg'
import alarmclock from '../../images/icons/alarmclock.svg'
import check from '../../images/icons/check.svg'

export default function Project({ data }) {
  console.log(data)
  const project = data.sanityProject;
  let about = project.aboutThisPartner[0].children[0].text;

  let problem = project.problemToSolve[0].children[0].text;
  return (
    <Layout>
      <h1>{project.title}</h1>
      <h2>About this Partner</h2>
      <p>{about}</p>
      <h2>Problem to Solve</h2>
      <p>{problem}</p>
      {/* Add chevron down to Read More button */}
      <Button text={'Read More'} textBtn></Button>
      <h2>Project Details</h2>
      <IconTile icon={calendardays} title={"Availability"} description={project.availability} ></IconTile>
      <IconTile icon={alarmclock} title={"Commitment"} description={project.commitment} ></IconTile>
      <IconTile icon={check} title={"Deliverable"} description={project.deliverable} ></IconTile>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    sanityProject(id: { eq: $id }) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      aboutThisProject {
        children {
          text
        }
      }
      aboutThisPartner {
        children {
          text
        }
      }
      active
      availability
      commitment
      deliverable
      filledPositions {
        positionTitle
        positionDescription
      }
      openPositions {
        positionTitle
        positionDescription
      }
      problemToSolve {
        children {
          text
        }
      }
      primaryContact {
        name
        title
        slug {
          current
        }
      }
      projectLinks {
        link
        linkType
      }
      techStack
    }
  }
`

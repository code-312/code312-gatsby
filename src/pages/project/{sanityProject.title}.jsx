import React from 'react'
import { graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import IconTile from '../../components/IconTile'
import calendardays from '../../images/icons/calendardays.svg'
import alarmclock from '../../images/icons/alarmclock.svg'
import check from '../../images/icons/check.svg'
import history from '../../images/icons/history.svg'
import VolunteerTile from '../../components/VolunteerTile'
import cardplaceholder from '../../images/card-placeholder.svg'
import CardBlock from '../../components/CardBlock'
import styled from 'styled-components'

  const PrimaryContent = styled.div`
    display: flex;
    padding: 2rem 3rem 4rem 3rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  `

  const Right = styled.div`
    display: flex;
    /* width: 39.5rem; */
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  `
  const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    align-self: stretch;
  `
  const Bottom = styled.div`
    display: flex;
    /* width: 75rem; */
    padding: 4rem 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  `
export default function Project({ data }) {


  console.log(data)
  const project = data.sanityProject
  let about = project.aboutThisPartner[0].children[0].text

  let problem = project.problemToSolve[0].children[0].text
  
  return (
    <Layout>
      <PortableText value={project.aboutThisPartner[0].children[0].text} />
      <PrimaryContent>
        <Left>
          <h2>About this Project</h2>
          <p>{about}</p>
          <h3>The Team</h3>
        </Left>
        <Right>
          <h1>{project.title}</h1>
          <h2>About this Partner</h2>
          <p>{about}</p>
          <h2>Problem to Solve</h2>
          <p>{problem}</p>
          {/* Add chevron down to Read More button */}
          <Button text={'Read More'} textBtn></Button>
          <h2>Project Details</h2>
          <IconTile
            icon={calendardays}
            title={'Availability'}
            description={project.availability}
          ></IconTile>
          <IconTile
            icon={alarmclock}
            title={'Commitment'}
            description={project.commitment}
          ></IconTile>
          <IconTile
            icon={check}
            title={'Deliverable'}
            description={project.deliverable}
          ></IconTile>
          <IconTile
            icon={history}
            title={'Project Status and Timeline'}
            description={
              'Visit the project links below to learn about what’s been done so far, upcoming tasks, and how you might contribute with your time and ability.'
            }
          ></IconTile>
          <VolunteerTile
            imageSrc={cardplaceholder}
            memberName={project.primaryContact.name}
            positionTitle={project.primaryContact.title}
          ></VolunteerTile>
        </Right>
      </PrimaryContent>
      <Bottom>
        <h2>More Projects</h2>
        <CardBlock></CardBlock>
      </Bottom>
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

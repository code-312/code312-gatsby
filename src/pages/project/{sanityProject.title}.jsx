import React from 'react'
import { graphql } from 'gatsby'
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
import Accordion from '../../components/Accordion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const PrimaryContent = styled.div`
  display: flex;
  padding: 2rem 3rem 4rem 3rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  @media screen and (max-width: 426px) {
    padding: 1rem 1rem 3rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
  padding-right: 8.63rem;
  @media screen and (max-width: 426px) {
    padding: 0;
  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }
`
const CarDetailsColumn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-direction: column;
  @media screen and (max-width: 426px) {
    align-items: center;
    align-self: stretch;
  }
`
const CardDetailsRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
    @media screen and (max-width: 426px) {
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  }
`
const Bottom = styled.div`
  display: flex;
  padding: 4rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
const accordionList = [
  {
    position: 'UX Research',
    role: [
      'As a UX designer on this team you will support the project by iterating on interface designs based on research findings and then handing off designs to developers',
    ],
    responsibilities: [
      'You will complete tasks in two week sprints and present designs to the team for feedback',
    ],
    preferreedSkills: [
      'Familiar with Figma or other prototyping tools',
      'Ability to collaborate with other designers, researchers, and developers',
      'Must be comfortable giving and receiving constructive feedback',
    ],
  },

  {
    position: 'UX Design',
    role: 'role description',
    responsibilities: 'role responsibilities',
  },
]
export default function Project({ data }) {
  console.log(data)
  const project = data.sanityProject
  let about = project.aboutThisPartner[0].children[0].text

  let problem = project.problemToSolve[0].children[0].text

  return (
    <Layout>
      <PrimaryContent>
        <Left>
          <h2>About this Project</h2>
          <p>{about}</p>
          <h3>The Team</h3>
          <p>Open Positions</p>
          <Accordion accordionList={accordionList}></Accordion>
          <h3>Tech Stack</h3>
          <Button text={'Join us'} textBtn arrow></Button>
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
          <CardDetailsRow>
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
          </CardDetailsRow>
          <CarDetailsColumn>
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
          </CarDetailsColumn>
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

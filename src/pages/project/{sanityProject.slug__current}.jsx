import React from 'react'
import { graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { components } from '../../lib/sanity-utils'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import IconTile from '../../components/IconTile'
import FullWidthTile from '../../components/FullWidthTile'
import calendardays from '../../images/icons/calendardays.svg'
import alarmclock from '../../images/icons/alarmclock.svg'
import check from '../../images/icons/check.svg'
import history from '../../images/icons/history.svg'
import VolunteerTile from '../../components/VolunteerTile'
import cardplaceholder from '../../images/card-placeholder.svg'
import Accordion from '../../components/Accordion'
import styled from 'styled-components'
import CardBlock from '../../components/CardBlock'
import Card from '../../components/Card'
import CardPlaceholder from '../../images/card-placeholder.svg'

const PrimaryContent = styled.div.attrs({
  className: 'width-wrapper',
})`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 3rem;
  margin-bottom: 3rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 10%;

  @media screen and (max-width: 980px) {
    padding: 1rem 1rem 3rem 1rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 39.5rem;
  align-self: stretch;
  @media screen and (max-width: 980px) {
    padding: 0;
    width: auto;
  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }
`
const CardDetailsColumn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    align-items: center;
    align-self: stretch;
  }
`
const CardDetailsRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }
`
const Bottom = styled.div`
  background-color: var(--light-grey);
  display: flex;
  padding: 4rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

export default function Project({ data }) {
  const project = data.sanityProject

  console.log('PROJECT: ', project.openPositions)

  return (
    <Layout>
      <PrimaryContent>
        <Right>
          <h2>{project.title}</h2>
          {project._rawAboutThisPartner && (
            <div>
              <h3>About this Partner</h3>
              <PortableText
                value={project._rawAboutThisPartner}
                components={components}
              />
            </div>
          )}
          {project._rawProblemToSolve && (
            <div>
              <h3>Problem to Solve</h3>
              <PortableText
                value={project._rawProblemToSolve}
                components={components}
              />
              {/* Add chevron down to Read More button */}
              {/* <Button text={'Read More'} textBtn></Button> */}
            </div>
          )}
          <h3>Project Details</h3>
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
          <CardDetailsColumn>
            <FullWidthTile
              icon={history}
              title={'Project Status and Timeline'}
              description={
                "Visit the project links below to learn about what's been done so far, upcoming tasks, and how you might contribute with your time and ability."
              }
              projectLinks={project.projectLinks}
            ></FullWidthTile>
            {project.primaryContact && (
              <VolunteerTile
                imageSrc={cardplaceholder}
                memberName={project.primaryContact.name}
                positionTitle={project.primaryContact.title}
                fullWidth
              ></VolunteerTile>
            )}
          </CardDetailsColumn>
        </Right>
        <Left>
          {project._rawAboutThisProject && (
            <>
              <h3>About this Project</h3>
              <PortableText
                value={project._rawAboutThisProject}
                components={components}
              />
            </>
          )}
          <h4>The Team</h4>
          <p>Open Positions</p>
          <Accordion accordionList={project._rawOpenPositions} />
          <h4>Tech Stack</h4>
          <Button text={'Join us'} textBtn arrow></Button>
        </Left>
      </PrimaryContent>
      {/* <Bottom>
        <h3>More Projects</h3>
        <CardBlock>
          <Card
            eyebrowText={'Eyebrow Text Goes Here'}
            mainHeading={'Main Heading Goes Here'}
            content={'Content paragraph goes here. Lorem Ipsum.'}
            linkUrl={'/components'}
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
          <Card
            eyebrowText={'Eyebrow Text Goes Here'}
            mainHeading={'Main Heading Goes Here'}
            content={'Content paragraph goes here. Lorem Ipsum.'}
            linkUrl={'/components'}
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
          <Card
            eyebrowText={'Eyebrow Text Goes Here'}
            mainHeading={'Main Heading Goes Here'}
            content={'Content paragraph goes here. Lorem Ipsum.'}
            linkUrl={'/components'}
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
          <Card
            eyebrowText={'Eyebrow Text Goes Here'}
            mainHeading={'Main Heading Goes Here'}
            content={'Content paragraph goes here. Lorem Ipsum.'}
            linkUrl={'/components'}
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
        </CardBlock>
      </Bottom> */}
    </Layout>
  )
}

export const Head = ({ data }) => (
  <title>{data.sanityProject.title} | Code312</title>
)

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
      _rawAboutThisProject(resolveReferences: { maxDepth: 10 })
      _rawAboutThisPartner(resolveReferences: { maxDepth: 10 })
      _rawProblemToSolve(resolveReferences: { maxDepth: 10 })
      active
      availability
      commitment
      deliverable
      _rawFilledPositions(resolveReferences: { maxDepth: 10 })
      _rawOpenPositions(resolveReferences: { maxDepth: 10 })
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

import React from 'react'
import { graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import IconTile from '../../components/IconTile'
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
  padding: 2rem 3rem 4rem 3rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 10%;

  @media screen and (max-width: 426px) {
    padding: 1rem 1rem 3rem 1rem;
    flex-direction: column;
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
  @media screen and (max-width: 426px) {
    padding: 0;
    width: auto;
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
const CardDetailsColumn = styled.div`
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
  background-color: var(--light-grey);
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

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  // const { width, height } = getImageDimensions(value)
  return (
    <img
      src={value.asset.url}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: 'block',

        // Avoid jumping around with aspect-ratio CSS property
        // aspectRatio: width / height,
      }}
    />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  block: {
    // Ex. 1: customizing common block types
    h3: ({ children }) => <h3 className="heading-2">{children}</h3>,
    h4: ({ children }) => <h4 className="heading-3">{children}</h4>,
    h5: ({ children }) => <h5 className="heading-4">{children}</h5>,
    h6: ({ children }) => <h6 className="heading-5">{children}</h6>,
    p: ({ children }) => <p className="p1-body">{children}</p>,
  },
}

export default function Project({ data }) {
  const project = data.sanityProject

  return (
    <Layout>
      <PrimaryContent>
        <Right>
          <h2>{project.title}</h2>
          <h3>About this Partner</h3>
          <PortableText
            value={project.aboutThisPartner}
            components={components}
          />
          <h3>Problem to Solve</h3>
          <PortableText
            value={project.problemToSolve}
            components={components}
          />
          {/* Add chevron down to Read More button */}
          <Button text={'Read More'} textBtn></Button>
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
          </CardDetailsColumn>
        </Right>
        <Left>
          <h3>About this Project</h3>
          <PortableText
            value={project.aboutThisProject}
            components={components}
          />
          <h4>The Team</h4>
          <p>Open Positions</p>
          <Accordion accordionList={accordionList}></Accordion>
          <h4>Tech Stack</h4>
          <Button text={'Join us'} textBtn arrow></Button>
        </Left>
      </PrimaryContent>
      <Bottom>
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
      _rawAboutThisProject(resolveReferences: { maxDepth: 10 })
      _rawAboutThisPartner(resolveReferences: { maxDepth: 10 })
      _rawProblemToSolve(resolveReferences: { maxDepth: 10 })
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

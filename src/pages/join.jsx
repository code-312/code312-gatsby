import React from 'react'
import styled from 'styled-components'
import IconGrid from '../components/IconGrid'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import ContentSection from '../components/ContentSection'
import attend from '../images/join-us/attend.svg'
import ghost from '../images/join-us/ghost.svg'
import initiative from '../images/join-us/initiative.svg'
import handOff from '../images/join-us/hand-off.svg'
import researchers from '../images/join-us/researchers.svg'
import analysts from '../images/join-us/analysts.svg'
import designers from '../images/join-us/designers.svg'
import developers from '../images/join-us/developers.svg'
import operations from '../images/join-us/operations.svg'
import active from '../images/join-us/active.svg'
import slack from '../images/slack.svg'
import codeconduct2 from '../images/join-us/codeconduct2.svg'
import form3 from '../images/join-us/turtle.png'
import form2 from '../images/join-us/commitment.png'
import form from '../images/join-us/we-meet.png'

const StyledSection = styled.section`
  background-color: var(--light-grey);
`

const JoinPage = () => {
  const icons = [
    {
      img: attend,
      title: 'Attend Meetings',
      description: 'All project teams have a regular meeting schedule.',
    },
    {
      img: ghost,
      title: "Don't ghost us",
      description: 'We know life happens so keep your team updated.',
    },
    {
      img: initiative,
      title: 'Take initiative',
      description: 'We work best when we fill in the gaps in the workflow.',
    },
    {
      img: handOff,
      title: 'Hand-Off Tasks',
      description: 'When you can’t participate anymore then let us know!',
    },
  ]

  const icons2 = [
    {
      img: analysts,
      title: 'Data Analysts',
      description:
        'Use data tools (e.g. SQL) to gather, clean, and interpret data.',
    },
    {
      img: developers,
      title: 'Developers',
      description:
        'From React to PostgreSQL, help us on the front and back-end.',
    },
    {
      img: designers,
      title: 'Designers',
      description:
        'We facilitate the entire design-thinking process from UX to UI.',
    },
    {
      img: researchers,
      title: 'Researchers',
      description: 'Talk to actual users to help us validate our solutions.',
    },
    {
      img: operations,
      title: 'Operations',
      description: 'We need people behind the scenes to keep us organized.',
    },
    {
      img: handOff,
      title: 'Project Managers',
      description: 'Talk to our partners and manage the project teams.',
    },
    {
      img: initiative,
      title: 'Product Managers',
      description: 'Identify which features to implement and plan work.',
    },
  ]

  const icons3 = [
    {
      img: active,
      title: 'Active Projects',
      description:
        'Check out the projects that are actively recruiting volunteers.',
      btnText: 'View Projects',
      linkUrl: '/',
    },
    {
      img: codeconduct2,
      title: 'Code of Conduct',
      description: 'Review and agree to our code of conduct.',
      btnText: 'View Conduct',
      linkUrl: '/',
    },
    {
      img: slack,
      title: 'Join Our Slack',
      description:
        'Check out our Slack where all of our collaboration happens.',
      btnText: 'Join Slack',
      linkUrl: '/',
    },
  ]

  const handleClick = () => {}

  return (
    <Layout>
      <Hero
        eyebrowText="JOIN US"
        mainHeading="Be part of the change in your community"
        description="Start the process of joining one of our on-going projects."
        buttonText="Start Onboarding"
        link="/"
        arrow
      />
      <Heading
        browText="Volunteer Expectations"
        headingText="Our workflow is scrappy"
        description="We try our best to be organized, but we rely on our volunteers to shape how they want to contribute."
        headingLevel="3"
      />
      <IconGrid icons={icons} />
      <ContentSection
        background="var(--light-grey)"
        eyebrowText={'how do volunteers participate?'}
        mainHeading={'We meet at least twice a month, and work asynchronously'}
        content={
          'Each project team meets at different times/days. In those meetings members update their progress and Project Leads identify new tasks for them to work on.'
        }
        imgUrl={form}
        imageDescription={'picture of a zoom meeting'}
      />
      <ContentSection
        background="var(--light-grey)"
        eyebrowText={'what is the time commitment?'}
        mainHeading={"Expect at least 1-4 hours a week"}
        content={
          'Aside from the meetings, members are responsible for how they want to spend their time on tasks. We know this isn’t your full time job so we expect volunteers to try their best.'
        }
        imgLeft={true}
        imgUrl={form2}
        imageDescription={'picture of two people working on laptops standing at a counter'}
      />
      <ContentSection
        background="var(--light-grey)"
        eyebrowText={'How long do projects last?'}
        mainHeading={
          "Projects vary and timelines change"
        }
        content={
          "We operate on our volunteer’s capacity so our pace is slow. Depending on scope and volunteer contribution, we’ve completed projects anywhere between 3 months and 1 year."
        }
        imgUrl={form3}
        imageDescription={"picture of a turtle with the words 'this might take a while"}
      />
      <Heading
        browText="HOW CAN YOU CONTRIBUTE?"
        headingText="Our teams are cross-functional and operate in different industries"
        description="We use design thinking to resolve technical challenges."
        headingLevel="3"
      />
      <IconGrid icons={icons2} />
      <StyledSection>
        <Heading
          browText="STEP 1"
          headingText="Ready to join? Start with these tasks"
          headingLevel="3"
        />
        <IconGrid icons={icons3} />
      </StyledSection>
      <Hero
        eyebrowText="STEP 2"
        mainHeading="Complete our onboarding form"
        description="The form gathers basic info like which project you want to join and your availability. Someone will review your response within 7 actual days and follow-up in Slack."
        buttonText="Start Onboarding"
        link="/"
        arrow
      />
    </Layout>
  )
}

export default JoinPage

export const Head = () => <title>Join Us!</title>

import React from 'react'
import { Link } from 'gatsby'
import IconGrid from '../components/IconGrid'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import AlternatingCard from '../components/AlternatingCard'
import code from '../images/join-us/code.svg'
import question from '../images/join-us/question-mark.svg'
import available from '../images/join-us/available.svg'
import active from '../images/join-us/active.svg'
import slack from '../images/slack.svg'
import codeconduct2 from '../images/join-us/codeconduct2.svg'
import handOff from '../images/join-us/hand-off.svg'
import zoom from '../images/join-us/zoom.png'
import meet from '../images/join-us/meet.jpeg'
import sloth from '../images/join-us/sloth.jpeg'
import styled from 'styled-components'

const HeadingWrapper = styled.section`
  padding: 4rem 1.5rem 1.5rem;
`
const JoinPage = () => {
  const icons = [
    {
      img: code,
      title: 'Attend Meetings',
      description: 'All project teams have a regular meeting schedule.',
    },
    {
      img: question,
      title: "Don't ghost us",
      description: 'We know life happens so keep your team updated.',
      link: 'View Projects',
    },
    {
      img: available,
      title: 'Take initiative',
      description: 'We work best when we fill in the gaps in the workflow.',
      link: 'View Conduct',
    },
    {
      img: handOff,
      title: 'Hand-Off Tasks',
      description: 'When you can’t participate anymore then let us know!',
      link: 'Join Slack',
    },
  ]

  const icons2 = [
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

  const icons3 = [
    {
      img: active,
      title: 'Data Analysts',
      description:
        'Use data tools (e.g. SQL) to gather, clean, and interpret data.',
    },
    {
      img: codeconduct2,
      title: 'Developers',
      description:
        'From React to PostgreSQL, help us on the front and back-end.',
    },
    {
      img: slack,
      title: 'Designers',
      description:
        'We facilitate the entire design-thinking process from UX to UI.',
    },
    {
      img: slack,
      title: 'Researchers',
      description: 'Talk to actual users to help us validate our solutions.',
    },
    {
      img: slack,
      title: 'Operations',
      description: 'We need people behind the scenes to keep us organized.',
    },
    {
      img: slack,
      title: 'Project Managers',
      description: 'Talk to our partners and manage the project teams.',
    },
    {
      img: slack,
      title: 'Product Managers',
      description: 'Identify which features to implement and plan work.',
    },
  ]

  return (
    <Layout>
      <Hero
        eyebrowText="JOIN US"
        mainHeading="Be part of the change in your community"
        buttonText="Start Onboarding"
        link="https://docs.google.com/presentation/d/1NrxKFWd3hhG5gn1Uyvaz-nM34kREHzquW_p4TwzIfCk/edit?usp=sharing"
        arrow
      >
        <p>
          Start the process of joining one of our on-going{' '}
          <Link to="/projects">projects</Link>.
        </p>
      </Hero>
      <HeadingWrapper>
        <Heading
          browText="Volunteer Expectations"
          headingText="Our culture is scrappy"
          description="We try our best to be organized, but we rely on our volunteers to shape how they want to contribute."
          headingLevel="3"
        />
      </HeadingWrapper>
      <IconGrid icons={icons} />
      <AlternatingCard
        thumbnail={zoom}
        alt="Asynchronous Communication via Zoom"
        eyebrow="how do volunteers participate?"
        title="We meet at least twice a month, and work asynchronously"
        description="We meet at least once a month in person and work asynchronously."
      />
      <AlternatingCard
        thumbnail={meet}
        alt="Asynchronous Communication via Zoom"
        eyebrow="What is the time commitment?"
        title="Expect at least 1-4 hours a week"
        description="Aside from the meetings, members are responsible for how they want to spend their time on tasks. We know this isn’t your full time job so we expect volunteers to try their best."
        imgLeft={true}
      />
      <AlternatingCard
        thumbnail={sloth}
        alt="Asynchronous Communication via Zoom"
        eyebrow="How long do projects last?"
        title="Projects vary and timelines change"
        description="We operate on our volunteer’s capacity so our pace is slow. Depending on scope and volunteer contribution, we’ve completed projects anywhere between 3 months and 1 year."
      />
      <Heading
        browText="How can you contribute?"
        headingText="Our teams are cross-functional and operate in different industries"
        description="We use design thinking to resolve technical challenges."
      />
      <IconGrid icons={icons3} />
      <HeadingWrapper>
        <Heading
          browText="Step 1"
          headingText="Ready to join? Start with these tasks"
          headingLevel="3"
        />
      </HeadingWrapper>
      <IconGrid icons={icons2} />
      <Hero
        mainHeading="Have you completed the pre-onboarding checklist?"
        buttonText="Start Onboarding"
        link="/"
        arrow
      />
    </Layout>
  )
}

export default JoinPage

export const Head = () => <title>Join Us!</title>

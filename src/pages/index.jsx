import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ContentSection from '../components/ContentSection'
import Organizations from '../images/Organizations.png'
import Heading from '../components/Heading'
import IconTile from '../components/IconTile'
import styled from 'styled-components'

const WorkWithUs = styled.section``

const IndexPage = () => {
  return (
    <Layout>
      <Hero />

      <WorkWithUs>
        <Heading
          headingText="Work With Us"
          description="Whoever you are, there is a place for you here! Join us for co-working, project, service, and social events."
        />
        <IconTile />
      </WorkWithUs>

      <ContentSection
        background={'var(--blizzard-blue)'}
        eyebrowText={'Organizations'}
        mainHeading={
          'Are you a Chicagoland nonprofit that needs some tech help?'
        }
        content={
          "Have an idea how to make your community better? You've come to the right place. Either contact us or come to one of our meetups to get the conversation started."
        }
        linkText={'Learn More'}
        linkUrl={'/'}
        imgUrl={Organizations}
        imageDescription={'Organization receiving help from Code for Chicago'}
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

import React from 'react'
import Card from '../components/Card'
import CardBlock from '../components/CardBlock'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Layout from '../components/Layout'

const JoinPage = () => {
  return (
    <Layout>
      <Hero
        eyebrowText="JOIN US"
        // mainHeading="Be part of the change in your community"
        mainHeading="Be part of the...community"
        buttonText="Start Onboarding"
      />
      <Heading
        browText="Volunteer Expectations"
        headingText="Our culture is scrappy"
        description="this content describes this section"
        headingLevel="3"
      />
            <CardBlock>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardBlock>
    </Layout>
  )
}

export default JoinPage

export const Head = () => <title>Join Us!</title>

import React from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import CardBlock from "../components/CardBlock"
import Heading from "../components/Heading"
import Hero from "../components/Hero"


const Projects = () => {
  return (
    <Layout>
      <Hero
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
      />
      <Heading
        browText="NEEDS VOLUNTEERS"
        headingText="Currently Recruiting"
        description="These projects are actively recruiting for new volunteers."
        headingLevel="3"
      />
      <CardBlock>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardBlock>
      <Heading
        browText="TEAMS AT CAPACITY"
        headingText="Not Recruiting"
        description="These projects are active, but don’t have room for additional volunteers."
        headingLevel="3"
      />
      <CardBlock>
        <Card></Card>
      </CardBlock>
      <Hero />
    </Layout>
  )
}

export default Projects;
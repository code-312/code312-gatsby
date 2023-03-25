import React from 'react'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import CardBlock from '../components/CardBlock'
import Card from '../components/Card'
import Layout from '../components/Layout'
import IconGrid from '../components/IconGrid'
import CfCSite from '../images/projects/CfCSite.png'
import voma from '../images/projects/voma.png'
import rescue from '../images/projects/rescue.png'
import cst from '../images/projects/cst.png'
import question from '../images/join-us/question-mark.svg'
import available from '../images/join-us/available.svg'
import active from '../images/join-us/active.svg'
import slack from '../images/join-us/slack.svg'
import codeconduct2 from '../images/join-us/codeconduct2.svg'
import handOff from '../images/join-us/hand-off.svg'
import form3 from '../images/join-us/form3.png'
import form2 from '../images/join-us/form2.png'
import form from '../images/join-us/form.png'

const ProjectsPage = () => {
  const icons = [
    {
      title: 'Join Our Slack',
      description:
        'Check out our Slack where all of our collaboration happens.',
    },
  ]

  return (
    <Layout>
      <Hero
        eyebrowText="PROJECTS"
        mainHeading="Explore active projects to get involved"
      />
      <Heading
        browText="Needs volunteers"
        headingText="Currently Recruiting"
        description="These projects are actively recruiting for new volunteers."
        headingLevel="3"
      />
      <CardBlock>
        <Card
          imgUrl={rescue}
          mainHeading="Rescue Chicago"
          content="Building an interactive data visualization dashboard to explore how different dog characteristics affect the average length of stay."
        />
        <Card
          imgUrl={CfCSite}
          mainHeading="Code for Chicago Website"
          content="Designing and building the Code for Chicago website and design system."
        />
        <Card
          imgUrl={voma}
          mainHeading="Voma"
          content="Building a better volunteer management tool for the Code for America Brigade network."
        />
        <Card
          imgUrl={cst}
          mainHeading="Chicago Council on Science and Technology"
          content="Transition the org\’s website from Wordpress to Wix. Improve the exisitng designs and develop it on the Wix platform."
        />
      </CardBlock>
      <Heading
        browText="Teams At Capacity"
        headingText="Not Recruiting"
        description="These projects are active, but don't have room for additional volunteers."
        headingLevel="3"
      />
      <IconGrid icons={icons} />
      <Hero
        mainHeading="Learn more on how you can join a project"
        buttonText="Join A Project"
      />
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects</title>

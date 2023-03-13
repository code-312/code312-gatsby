import React from 'react'
import Card from '../components/Card'
import IconTile from '../components/IconTile'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import ContentSection from '../components/ContentSection'
import codeOfConduct from '../images/code-of-conduct.svg'
import TestImage from '../images/TestImage.png'

const JoinPage = () => {
  return (
    <Layout>
      <Hero
        eyebrowText="JOIN US"
        mainHeading="Be part of the change in your commmunity"
        buttonText="Start Onboarding"
      />
      <Heading
        browText="Volunteer Expectations"
        headingText="Our culture is scrappy"
        description="this content describes this section"
        headingLevel="3"
      />
      <section className="icon-container">
        <IconTile
          icon={codeOfConduct}
          title={'Code of Conduct'}
          description={'We ensure we keep teamwork safe and fun.'}
        />
        <IconTile
          icon={codeOfConduct}
          title={'Ask Questions'}
          description={'Don’t be afraid to ask someone questions!'}
        />
        <IconTile
          icon={codeOfConduct}
          title={'Availability'}
          description={
            'We know life happens so let your team know if you have capacity'
          }
        />
        <IconTile
          icon={codeOfConduct}
          title={'Hand-Off Tasks'}
          description={
            'Ensure your work continues and transfer your tasks to another!'
          }
        />
      </section>
      <ContentSection
        eyebrowText={'PART 1: START ONBOARDING REGISTRATION'}
        mainHeading={'To start onboarding, complete our onboarding form'}
        content={'The form gathers basic info like which project you want to join and your availability. Someone will review your response within 7 actual days and follow-up in Slack.'}
        linkUrl={'/components'}
        linkText={'Start Onboarding'}
        imgUrl={TestImage}
        imageDescription={'image for testing components'}
      />
      <ContentSection
        eyebrowText={'PART 2: VOLUNTEER SKILLS'}
        mainHeading={'Next, we\'ll learn more about your specific skills'}
        content={'Someone will reach out in Slack to assign you a new task of completing another form. This will give us a better idea of which project to place you.'}
        linkUrl={'/components'}
        linkText={'Join Our Slack'}
        imgUrl={TestImage}
        imageDescription={'image for testing components'}
      />
      <ContentSection
        eyebrowText={'PART 3: PROJECT FIT'}
        mainHeading={'Finally, you\'ll be assigned a project that is a best fit for you'}
        content={'In this process you\'ll learn more about the project, shadow a meeting, and meet the people you\'ll collaborate with.'}
        linkUrl={'/components'}
        linkText={'View Active Projects'}
        imgUrl={TestImage}
        imageDescription={'image for testing components'}
      />
      <Heading
        browText="Start onboarding today"
        headingText="Ready to join?"
        description="This is content that describes this section."
        headingLevel="3"
      />
      <Hero
        mainHeading="Have you completed the pre-onboarding checkllist?"
        buttonText="Start Onboarding"
      />
    </Layout>
  )
}

export default JoinPage

export const Head = () => <title>Join Us!</title>

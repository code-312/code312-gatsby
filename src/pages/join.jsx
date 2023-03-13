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
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content paragraph goes here. Lorem Ipsum.'}
        linkUrl={'/components'}
        linkText={'To Components Page'}
        imgUrl={TestImage}
        imageDescription={'image for testing components'}
      />
      <ContentSection
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content paragraph goes here. Lorem Ipsum.'}
        linkUrl={'/components'}
        linkText={'To Components Page'}
        imgUrl={TestImage}
        imageDescription={'image for testing components'}
      />
      <ContentSection
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content paragraph goes here. Lorem Ipsum.'}
        linkUrl={'/components'}
        linkText={'To Components Page'}
        imgUrl={TestImage}
        imageDescription={'image for testing components'}
      />
    </Layout>
  )
}

export default JoinPage

export const Head = () => <title>Join Us!</title>

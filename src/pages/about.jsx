import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ContentSection from '../components/ContentSection'
import TextContentSection from '../components/TextContentSection'

const AboutPage = () => {
  return (
    <Layout>
      <Hero
        eyebrowText="ABOUT US"
        mainHeading="Making Tech Accessible to Everyone"
        buttonText="Button"
      />
      <ContentSection
        background={'var(--white)'}
        eyebrowText={'WHAT IS CIVIC TECH?'}
        mainHeading={
          'Civic tech bridges the gap between the peole and the government through technology'
        }
        content={
          'It’s utilizing technology practices like design, engineering, data science, etc. to optimize the processes for civic organizations. Think about tools like tax filing portals and city transit apps.'
        }
      />
      <ContentSection
        eyebrowText={'WHAT IS CODE FOR CHICAGO?'}
        mainHeading={
          'Code for  Chicago operates laike a pro-bono digital consultancy'
        }
        linkText={'Volunteer with Us'}
      />
      <TextContentSection
        background={'var(--white)'}
        eyebrowText={'WHAT IS CIVIC TECH?'}
        mainHeading={
          'Civic tech bridges the gap between the people and the government through technology.'
        }
        content={
          'It’s utilizing technology practices like design, engineering, data science, etc. to optimize the processes for civic organizations. Think about tools like tax filing portals and city transit apps.'
        }
      >
        <p>Whatever</p>
      </TextContentSection>
    </Layout>
  )
}

export default AboutPage

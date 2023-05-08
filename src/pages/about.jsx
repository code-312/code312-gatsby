import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FAQSection from '../components/FAQSection'

const AboutPage = () => {
  return (
    <Layout>
      <Hero
        eyebrowText="ABOUT US"
        mainHeading="Making Tech Accessible to Everyone"
        buttonText="Button"
      />
      <FAQSection
        background={'var(--white)'}
        eyebrowText={'WHAT IS CIVIC TECH?'}
        mainHeading={
          'Civic tech bridges the gap between the people and the government through technology.'
        }
      >
        <p>It’s utilizing technology practices like design, engineering, data science, etc. to optimize the processes for civic organizations. Think about tools like tax filing portals and city transit apps.
        </p>
      </FAQSection>
    </Layout>
  )
}

export default AboutPage

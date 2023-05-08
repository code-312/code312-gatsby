import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FAQSection from '../components/FAQSection'
import Quote from '../components/Quote'

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
        <p>
          It’s utilizing technology practices like design, engineering, data
          science, etc. to optimize the processes for civic organizations. Think
          about tools like tax filing portals and city transit apps.
        </p>
      </FAQSection>
      <Quote
        quote={
        '"Those of us who work in civic tech want public digital goods to be as good as the ones made by commercial entities like Apple or Google—and we want public digital infrastructure to be as good, too."'
        }
        author={'Cyd Harrell'}
        source={'A Civic Technologist’s Practice Guide'}
      />
    </Layout>
  )
}

export default AboutPage

import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FAQSection from '../components/FAQSection'
import Quote from '../components/Quote'
import Button from '../components/Button'
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
        background={'var(--light-grey)'}
        quote={
          '"Those of us who work in civic tech want public digital goods to be as good as the ones made by commercial entities like Apple or Google—and we want public digital infrastructure to be as good, too."'
        }
        author={'Cyd Harrell'}
        source={' A Civic Technologist’s Practice Guide'}
      />
      <FAQSection
        background={'var(--white)'}
        eyebrowText={'WHAT IS CODE FOR CHICAGO?'}
        mainHeading={
          'Code for Chicago operates like a pro-bono digital consultancy'
        }
      >
        <div className="eyebrow-header-group">
          <h3 className="h3-eyebrow">Operating Shoulder-to-Shoulder</h3>
          <p className="text-content">
            When we start a new project we typically partner up with a local
            organization. Since we aren't our users, this ensures we are
            effectively addressing the needs of the community and not operating
            from our own perspective as practitioners.
          </p>
          <h3 className="h3-eyebrow">Establishing Our Process</h3>
          <p className="text-content">
            We begin by identifying the needs of the organization, drafting a
            problem statement, and collaborating throughout the project to
            ensure needs are met.
          </p>
          <h3 className="h3-eyebrow">Volunteer Work</h3>
          <p className="text-content">
            Our process requires an army of volunteers of various skill sets who
            are all on a mission to improve technology for the people.
            Volunteers typically join to try out civic tech, network with
            like-minded people, and learn new skills.
          </p>
          <div className="button-group">
           <Button text={'Volunteer With Us'}></Button>
           <Button text={'Partner with Us'}></Button>
          </div>
        </div>
      </FAQSection>
    </Layout>
  )
}

export default AboutPage

import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ContactUs from '../components/ContactUs'

import styled from 'styled-components'

const StyledPartnerPage = styled.div`
  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const Partner = () => {
  return (
    <Layout>
      <StyledPartnerPage>
        <Hero
          eyebrowText={'Partner with us'}
          mainHeading={
            'Do you need help with your website, app, or other technical needs?'
          }
        >
          <p className="hero">
            Are you a small not-for-profit with a limited budget? Do you have a
            flexible timeline? Have time to commit to a new project? Our
            projects are ongoing endeavors with the organizations that need it
            the most.
          </p>
        </Hero>
        <ContactUs
          copy={
            'Are you a partner that wants to learn more? Reach out to us and we can schedule a quick chat.'
          }
        />
      </StyledPartnerPage>
    </Layout>
  )
}
export default Partner
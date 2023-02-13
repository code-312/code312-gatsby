import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ContentSection from '../components/ContentSection'
import Organizations from '../images/Organizations.png'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ContentSection
        background={'var(--blizzard-blue)'}
        eyebrowText={'Organizations'}
        mainHeading={
          'Are you a Chicagoland nonprofit that needs some tech help?'
        }
        content={
          "Have an idea how to make your community better? You've come to the right place. Either contact us or come to one of our meetups to get the conversation started."
        }
        linkText={'Learn More'}
        linkUrl={'/'}
        imgUrl={Organizations}
        imageDescription={'Organization receiving help from Code for Chicago'}
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

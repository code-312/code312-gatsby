import React from 'react'
import CallToAction from '../components/CallToAction'
import ContactUs from '../components/ContactUs'
import Hero from '../components/Hero'
import IconTile from '../components/IconTile'
import Layout from '../components/Layout'
import TestImage from '../images/TestImage.png'
import skyline from '../images/skyline.svg'
import codeOfConduct from '../images/code-of-conduct.svg'

const Components = () => {
  return (
    <Layout>
      <CallToAction
        title="Title Goes Here"
        link="/components"
        buttonDisplay="Components Page"
      />
      <ContactUs />
      <ContentSection
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content paragraph goes here. Lorem Ipsum.'}
        linkUrl={'/components'}
        linkText={'To Components Page'}
        imgUrl={TestImage}
        imageDescription={'image for testing components'}
      />
      <Hero
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content goes here.'}
        img={skyline}
        imgDescription={'Skyline of Chicago'}
      />
      <IconTile
        icon={codeOfConduct}
        title={'Title'}
        description={'Description goes Here'}
      />
    </Layout>
  )
}
export default Components

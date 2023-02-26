import React from 'react'
import CallToAction from '../components/CallToAction'
import Button from '../components/Button'
import ShortTextInput from '../components/ShortTextInput'
import Card from '../components/Card'
import ContactUs from '../components/ContactUs'
import ContentSection from '../components/ContentSection'
import Hero from '../components/Hero'
import IconTile from '../components/IconTile'
import Layout from '../components/Layout'
import TestImage from '../images/TestImage.png'
import skyline from '../images/skyline.svg'
import codeOfConduct from '../images/code-of-conduct.svg'
import CardPlaceholder from '../images/card-placeholder.svg'
import Heading from '../components/Heading'
import LongtextInput from '../components/LongTextInput'

const Components = () => {
  return (
    <Layout>
      <Heading
        browText="Volunteer Expectations"
        headingText="Our culture is scrappy"
        description="this content describes this section"
        headingLevel="3"
      />
      <Button text="Submit" secondary small />
      <ShortTextInput
        label="Email*"
        type="email"
        required
        helper="This is helper text"
        error="This is an error"
      />
      <LongtextInput />
      <CallToAction
        title="Title Goes Here"
        link="/components"
        buttonDisplay="Components Page"
      />
      <Card
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content paragraph goes here. Lorem Ipsum.'}
        linkUrl={'/components'}
        linkText={'To Components Page'}
        imgUrl={CardPlaceholder}
        imageDescription={'image for testing components'}
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

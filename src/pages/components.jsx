import React from 'react'
import AlternatingCard from '../components/AlternatingCard'
import Button from '../components/Button'
import CallToAction from '../components/CallToAction'
import Card from '../components/Card'
import CardBlock from '../components/CardBlock'
import Checklist from '../components/Checklist'
import ContactUs from '../components/ContactUs'
import ContentSection from '../components/ContentSection'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import IconGrid from '../components/IconGrid'
import IconTile from '../components/IconTile'
import Layout from '../components/Layout'
import LongtextInput from '../components/LongTextInput'
import Quote from '../components/Quote'
import RadioOption from '../components/RadioOption'
import ShortTextInput from '../components/ShortTextInput'
import UpcomingEvents from '../components/UpcomingEvents'

import TestImage from '../images/TestImage.png'
import skyline from '../images/skyline.svg'
import codeOfConduct from '../images/code-of-conduct.svg'
import CardPlaceholder from '../images/card-placeholder.svg'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Components = () => {
  return (
    <Layout>
      <h2 style={{ margin: '2rem' }}>Component List</h2>
      {/* <AlternatingCard /> NOT EVEN USED */}
      <StyledSection className="width-wrapper">
        <h3>Buttons</h3>
        <Button text="Button w/ Arrow" textBtn arrow link="/" />
        <Button text="Primary Button" link="/components" />
        <Button text="Secondary Button" link="/components" secondary />
      </StyledSection>
      {/* <CallToAction
        title="Title Goes Here"
        link="/components"
        buttonDisplay="Components Page"
      /> NOT EVEN USED */}
      <Card
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content paragraph goes here. Lorem Ipsum.'}
        linkUrl={'/components'}
        linkText={'To Components Page'}
        imgUrl={CardPlaceholder}
        imageDescription={'image for testing components'}
      />
      <CardBlock>
        <Card
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content paragraph goes here. Lorem Ipsum.'}
          linkUrl={'/components'}
          linkText={'To Components Page'}
          imgUrl={CardPlaceholder}
          imageDescription={'image for testing components'}
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
        <Card
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content paragraph goes here. Lorem Ipsum.'}
          linkUrl={'/components'}
          linkText={'To Components Page'}
          imgUrl={CardPlaceholder}
          imageDescription={'image for testing components'}
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
      </CardBlock>
      <Checklist />
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
      <Heading
        browText="Volunteer Expectations"
        headingText="Our culture is scrappy"
        description="this content describes this section"
        headingLevel="3"
      />
      <Hero
        eyebrowText={'Eyebrow Text Goes Here'}
        mainHeading={'Main Heading Goes Here'}
        content={'Content goes here.'}
        img={skyline}
        imgDescription={'Skyline of Chicago'}
      />
      {/* <IconGrid /> */}
      <IconTile
        icon={codeOfConduct}
        title={'Title'}
        description={'Description goes Here'}
      />
      <LongtextInput />
      <Quote />
      {/* <RadioOption optionLabel="Sample Option" />
        <RadioOption optionLabel="Sample Option" /> */}
      <ShortTextInput
        label="Email*"
        type="email"
        required
        helper="This is helper text"
        error="This is an error"
      />
      <UpcomingEvents />
    </Layout>
  )
}
export default Components

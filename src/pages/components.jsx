import React from 'react'
import CallToAction from '../components/CallToAction'
import Button from '../components/Button'
import ShortTextInput from '../components/ShortTextInput'
import Card from '../components/Card'
import CardBlock from '../components/CardBlock'
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
import Checklist from '../components/Checklist'
import Quote from '../components/Quote'
import IntroTile from '../components/IntroTile'
import TilePhoto from '../../images/uploads/allie_serd.png'
// /Users/dior/cfc/code-for-chicago-gatsby/images/uploads/allie_serd.png
const Components = () => {
  return (
    <Layout>
      <Heading
        browText="Volunteer Expectations"
        headingText="Our culture is scrappy"
        description="this content describes this section"
        headingLevel="3"
      />
      <Checklist />
      <Quote />
      <Button text="Submit" textBtn arrow link="/" />
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
      <CardBlock>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardBlock>
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
      <IntroTile
        memberName={'Allie Serd'}
        imageSrc={TilePhoto}
        positionTitle={'Volunteer Lead'}
      ></IntroTile>
    </Layout>
  )
}
export default Components

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
import VolunteerTile from '../components/VolunteerTile'
import TilePhoto from '../../images/uploads/allie_serd.png'
import Team from '../components/Team'
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
      <StyledSection className="width-wrapper">
        <h3>Card</h3>
        <Card
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content paragraph goes here. Lorem Ipsum.'}
          linkUrl={'/components'}
          linkText={'To Components Page'}
          imgUrl={CardPlaceholder}
          imageDescription={'image for testing components'}
        />
      </StyledSection>
      <StyledSection className="width-wrapper">
        <h3>Card Block</h3>
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
      </StyledSection>
      <StyledSection className="width-wrapper">
        <h3>Checklist</h3>
        <Checklist />
      </StyledSection>
      <StyledSection>
        <h3>ContactUs</h3>
        <ContactUs />
      </StyledSection>
      <StyledSection className="width-wrapper">
        <h3>ContentSection</h3>
        <ContentSection
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content paragraph goes here. Lorem Ipsum.'}
          linkUrl={'/components'}
          linkText={'To Components Page'}
          imgUrl={TestImage}
          imageDescription={'image for testing components'}
        />
      </StyledSection>
      <StyledSection className="width-wrapper">
        <h3>Heading</h3>
        <Heading
          browText="Volunteer Expectations"
          headingText="Our culture is scrappy"
          description="this content describes this section"
          headingLevel="3"
        />
      </StyledSection>
      <StyledSection>
        <h3>Hero</h3>
        <Hero
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content goes here.'}
          img={skyline}
          imgDescription={'Skyline of Chicago'}
        />
      </StyledSection>
      {/* <IconGrid /> */}
      <StyledSection className="width-wrapper">
        <h3>IconTile</h3>
        <IconTile
          icon={codeOfConduct}
          title={'Title'}
          description={'Description goes Here'}
        />
      </StyledSection>
      <StyledSection className="width-wrapper">
        <h3>LongtextInput</h3>
        <LongtextInput />
      </StyledSection>
      {/* <StyledSection className="width-wrapper">
        <h3>Quote</h3>
        <Quote />
      </StyledSection> NOT EVEN USED */}
      {/* <RadioOption optionLabel="Sample Option" />
        <RadioOption optionLabel="Sample Option" /> */}
      <StyledSection className="width-wrapper">
        <h3>ShortTextInput</h3>
        <ShortTextInput
          label="Email*"
          type="email"
          required
          helper="This is helper text"
          error="This is an error"
        />
      </StyledSection>
      <StyledSection className="width-wrapper">
        <h3>UpcomingEvents</h3>
        <UpcomingEvents />
      </StyledSection>

      <Team eyebrowText={'Who are we?'} mainHeading={'Meet our Leadership Team'}>
        <VolunteerTile
          memberName={'Allie Serd'}
          imageSrc={TilePhoto}
          positionTitle={'Volunteer Lead'}
        ></VolunteerTile>
        <VolunteerTile
          memberName={'Allie Serd'}
          imageSrc={TilePhoto}
          positionTitle={'Volunteer Lead'}
        ></VolunteerTile>
      </Team>
    </Layout>
  )
}
export default Components

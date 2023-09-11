import React from 'react'
import AlternatingCard from '../components/AlternatingCard'
import Button from '../components/Button'
import CallToAction from '../components/CallToAction'
import Card from '../components/Card'
import CardBlock from '../components/CardBlock'
import Checklist from '../components/Checklist'
import ContactUs from '../components/ContactUs'
import ContentSection from '../components/ContentSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import IconGrid from '../components/IconGrid'
import IconTile from '../components/IconTile'
import ImageWrapper from '../components/ImageWrapper'
import Layout from '../components/Layout'
import LongtextInput from '../components/LongTextInput'
import MobileNav from '../components/MobileNav'
import MobileNavExpanded from '../components/MobileNavExpanded'
import Nav from '../components/Nav'
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
import SampleTilePhoto from '../../images/uploads/allie_serd.png'
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

      <StyledSection className="width-wrapper">
        <h3>Buttons</h3>
        <Button text="Button w/ Arrow" textBtn arrow link="/" />
        <Button text="Primary Button" link="/components" />
        <Button text="Secondary Button" link="/components" secondary />
      </StyledSection>

      <StyledSection className="width-wrapper">
        <h3>Card</h3>
        <Card
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content paragraph goes here. Lorem Ipsum.'}
          linkUrl={'/components'}
          linkText={'Components'}
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
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
          <Card
            eyebrowText={'Eyebrow Text Goes Here'}
            mainHeading={'Main Heading Goes Here'}
            content={'Content paragraph goes here. Lorem Ipsum.'}
            linkUrl={'/components'}
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
          <Card
            eyebrowText={'Eyebrow Text Goes Here'}
            mainHeading={'Main Heading Goes Here'}
            content={'Content paragraph goes here. Lorem Ipsum.'}
            linkUrl={'/components'}
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
          <Card
            eyebrowText={'Eyebrow Text Goes Here'}
            mainHeading={'Main Heading Goes Here'}
            content={'Content paragraph goes here. Lorem Ipsum.'}
            linkUrl={'/components'}
            linkText={'Components'}
            imgUrl={CardPlaceholder}
            imageDescription={'image for testing components'}
          />
        </CardBlock>
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
          linkText={'Components'}
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
        <h4>Hero with image</h4>
        <Hero
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content goes here.'}
          img={skyline}
          imgDescription={'Skyline of Chicago'}
        />
        <h4>Hero with no image</h4>
        <Hero
          eyebrowText={'Eyebrow Text Goes Here'}
          mainHeading={'Main Heading Goes Here'}
          content={'Content goes here.'}
          imgDescription={'Skyline of Chicago'}
        />
      </StyledSection>

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
      <VolunteerTile
        memberName={'Allie Serd'}
        imageSrc={SampleTilePhoto}
        positionTitle={'Volunteer Lead'}
      ></VolunteerTile>

      <hr />

      {/* THIS COMPONENT DOES NOT CURRENTLY INCLUDE A STYLED WRAPPER */}
      <StyledSection className="width-wrapper">
        <h3>Alternating Card</h3>
        <AlternatingCard
          thumbnail={CardPlaceholder}
          alt={'description for card image'}
          areas={'Eyebrow text goes here'}
          title={'Card title goes here'}
          description={'Card content description goes here'}
          url={'/components'}
          urlText={'Components'}
        />
      </StyledSection>

      {/* THIS COMPONENT DOES NOT CURRENTLY INCLUDE A STYLED WRAPPER */}
      <StyledSection>
        <h3>Call To Action</h3>
        <CallToAction
          title="Title Goes Here"
          link="/components"
          buttonDisplay="Components Page"
        />
      </StyledSection>

      {/* THIS COMPONENT DOES NOT CURRENTLY INCLUDE A STYLED WRAPPER */}
      <StyledSection className="width-wrapper">
        <h3>Checklist</h3>
        <Checklist />
      </StyledSection>

      <StyledSection className="width-wrapper">
        <h3>FAQ Section</h3>
        <FAQSection
          eyebrowText={'Eyebrow text goes here'}
          mainHeading={'Main heading goes here'}
          children
          background
        />
      </StyledSection>

      <StyledSection className="width-wrapper">
        <h3>Footer</h3>
        <Footer />
      </StyledSection>

      {/* NEED TO ADD ICONS TO RENDER - LEAVING IT COMMENTED OUT FOR NOW UNLESS IT'LL BE USED */}
      {/* <StyledSection className="width-wrapper">
        <h3>Icon Grid</h3>
        <IconGrid />
      </StyledSection> */}

      <StyledSection className="width-wrapper">
        <h3>Image Wrapper</h3>
        <ImageWrapper alt={'Image description'} image={TestImage} />
      </StyledSection>

      <StyledSection className="width-wrapper">
        <h3>Nav</h3>
        <Nav />
      </StyledSection>

      <StyledSection className="width-wrapper">
        <h3>Mobile Nav</h3>
        <MobileNav />
        <MobileNavExpanded />
      </StyledSection>

      <StyledSection className="width-wrapper">
        <h3>Quote</h3>
        <Quote
          quote={'Quote text goes here'}
          author={'Author name goes here'}
          source={'Source text goes here'}
        />
      </StyledSection>

      <StyledSection className="width-wrapper">
        <h3>Radio Option</h3>
        <RadioOption optionLabel={'Label Text'} />
      </StyledSection>
    </Layout>
  )
}
export default Components

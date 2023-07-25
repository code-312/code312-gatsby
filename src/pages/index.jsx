import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Button from '../components/Button'
import ContentSection from '../components/ContentSection'
import ContactUs from '../components/ContactUs'
import Organizations from '../images/Organizations.png'
import Volunteers from '../images/Volunteers.png'
import Heading from '../components/Heading'
import IconGrid from '../components/IconGrid'
import styled from 'styled-components'
import anyone from '../images/icons/anyone.svg'
import communityorganizers from '../images/icons/communityorganizers.svg'
import datascientists from '../images/icons/datascientists.svg'
import designers from '../images/icons/designers.svg'
import developers from '../images/icons/developers.svg'
import productmanagers from '../images/icons/productmanagers.svg'
import projectmanagers from '../images/icons/projectmanagers.svg'
import socialworkers from '../images/icons/socialworkers.svg'
import skyline from '../images/skyline.svg'


const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 0;

  div {
    display: flex;
    gap: 1.5rem;
  }
`

const WorkWithUs = styled.section`
  padding: 4rem 3rem;
  gap: 1.5;
`
const Events = styled.section`
  display: flex;
  padding: 4rem 3rem;
  flex-direction: column;
  align-items: center;
`
const IndexPage = () => {
  const icons = [
    { img: developers, title: 'Developers' },
    { img: designers, title: 'Designers' },
    { img: datascientists, title: 'Data Scientists' },
    { img: projectmanagers, title: 'Project Managers' },
    { img: productmanagers, title: 'Product Managers' },
    { img: communityorganizers, title: 'Community Organizers' },
    { img: socialworkers, title: 'Social Workers' },
    { img: anyone, title: 'Anyone' },
  ]

  return (
    <Layout>
      <Hero
        mainHeading="Making community services work in a digital age"
        eyebrowText="A Code for America Brigade"
        img={skyline}
        imgDescription={'Skyline of Chicago'}
      >
        <HeroContent>
          <div>
            <Button text="Get Started" link="/join" />
          </div>
        </HeroContent>
      </Hero>
      <WorkWithUs>
        <Heading
          headingText="Work With Us"
          description="Whoever you are, there is a place for you here! Join us for co-working, project, service, and social events."
        />
        <IconGrid icons={icons} />
      </WorkWithUs>

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
      <ContentSection
        background={'var(--light-grey)'}
        eyebrowText={'Volunteers'}
        mainHeading={
          'Looking to use your skills for the greater good and build your resume?'
        }
        content={
          'Maybe you’re looking to pick up a new tech skill. You too, have come to the right place. Sign up for our meetups or join us on Slack.'
        }
        linkText={'Join us on Slack'}
        linkUrl={
          'https://join.slack.com/t/c4chi/shared_invite/zt-1mvwfme5d-0FtxC_4ZcGW9StKgfBvToQ'
        }
        imgUrl={Volunteers}
        imageDescription={'Organization receiving help from Code for Chicago'}
        imgLeft
      />
      <Events>
        <Heading
          headingText="No Upcoming Events"
          description="Join our Meetup group to
        stay up to date on what’s coming up."
        >
          <Button
            center
            link={'https://www.meetup.com/code-for-chicago/'}
            text={'Join our Meetup Group'}
          ></Button>
        </Heading>
      </Events>
      <ContactUs />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

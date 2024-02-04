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

const WorkWithUs = styled.section``
const HeadingWrapper = styled.section`
  padding: 4rem 1.5rem 1.5rem;
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
        <HeadingWrapper>
          <Heading
            headingText="Work With Us"
            description="Whoever you are, there is a place for you here! Join us for co-working, project, service, and social events."
          />
        </HeadingWrapper>
        <IconGrid icons={icons} />
      </WorkWithUs>

      <ContentSection
        background={'var(--blizzard-blue)'}
        eyebrowText={'Organizations'}
        mainHeading={
          'Are you a Chicagoland nonprofit that needs some tech help?'
        }
        content={
          "Have an idea how to make your community better? You've come to the right place. Contact us to get the conversation started."
        }
        linkText={'Learn More'}
        linkUrl={'/partner'}
        imgUrl={Organizations}
        imageDescription={'Organization receiving help from Code 312'}
      />
      <ContentSection
        background={'var(--light-grey)'}
        eyebrowText={'Volunteers'}
        mainHeading={
          'Looking to use your skills for the greater good and build your resume?'
        }
        content={
          'Maybe you’re looking to pick up a new tech skill. You too, have come to the right place. Sign up or join us on Slack.'
        }
        linkText={'Join us on Slack'}
        linkUrl={
          'https://join.slack.com/t/code312/shared_invite/zt-2acnn36rl-kNFFP9E_NqxWORqHfBIO2w'
        }
        imgUrl={Volunteers}
        imageDescription={'Organization receiving help from Code 312'}
        imgLeft
      />
      <HeadingWrapper>
        <Heading headingText="No Upcoming Events"></Heading>
      </HeadingWrapper>
      <ContactUs />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

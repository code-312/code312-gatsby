import React from 'react'
import IconGrid from '../components/IconGrid'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import ContentSection from '../components/ContentSection'
import code from '../images/join-us/code.svg'
import question from '../images/join-us/question-mark.svg'
import available from '../images/join-us/available.svg'
import active from '../images/join-us/active.svg'
import slack from '../images/join-us/slack.svg'
import codeconduct2 from '../images/join-us/codeconduct2.svg'
import handOff from '../images/join-us/hand-off.svg'
import form3 from '../images/join-us/form3.png'
import form2 from '../images/join-us/form2.png'
import form from '../images/join-us/form.png'

const JoinPage = () => {
  const icons = [
    {
      img: code,
      title: 'Code of Conduct',
      description: 'We ensure we keep teamwork safe and fun.',
    },
    {
      img: question,
      title: 'Ask Questions',
      description: 'Don’t be afraid to ask someone questions!',
      link: 'View Projects',
    },
    {
      img: available,
      title: 'Availability',
      description:
        'We know life happens so let your team know if you have capacity.',
      link: 'View Conduct',
    },
    {
      img: handOff,
      title: 'Hand-Off Tasks',
      description:
        'Ensure your work continues and transfer your tasks to another!',
      link: 'Join Slack',
    },
  ]

  const icons2 = [
    {
      img: active,
      title: 'Active Projects',
      description:
        'Check out the projects that are actively recruiting volunteers.',
      btnText: 'View Projects',
      linkUrl: '/random',
    },
    {
      img: codeconduct2,
      title: 'Code of Conduct',
      description: 'Review and agree to our code of conduct.',
      btnText: 'View Conduct',
      linkUrl: '/random',
    },
    {
      img: slack,
      title: 'Join Our Slack',
      description:
        'Check out our Slack where all of our collaboration happens.',
      btnText: 'Join Slack',
      linkUrl: '/random',
    },
  ]
  return (
    <Layout>
      <Hero
        eyebrowText="JOIN US"
        mainHeading="Be part of the change in your community"
        buttonText="Start Onboarding"
      />
      <Heading
        browText="Volunteer Expectations"
        headingText="Our culture is scrappy"
        description="This is content that describes this section."
        headingLevel="3"
      />
      <IconGrid icons={icons} />
      <ContentSection
        background="var(--light-grey)"
        eyebrowText="PART 1: START ONBOARDING REGISTRATION"
        mainHeading="To start onboarding, complete our onboarding form"
        content="The form gathers basic info like which project you want to join and your availability. Someone will review your response within 7 actual days and follow-up in Slack."
        linkUrl="/components"
        linkText="Start Onboarding"
        imgUrl={form}
        imageDescription="picture of the onboarding form step 1"
      />
      <ContentSection
        background="var(--light-grey)"
        eyebrowText="PART 2: VOLUNTEER SKILLS"
        mainHeading="Next, we'll learn more about your specific skills"
        content="Someone will reach out in Slack to assign you a new task of completing another form. This will give us a better idea of which project to place you."
        linkUrl="/components"
        linkText="Join Our Slack"
        imgLeft={true}
        imgUrl={form2}
        imageDescription="picture of the onboarding form step 2"
      />
      <ContentSection
        background="var(--light-grey)"
        eyebrowText="PART 3: PROJECT FIT"
        mainHeading="Finally, you'll be assigned a project that is a best fit for you"
        content="In this process you'll learn more about the project, shadow a meeting, and meet the people you'll collaborate with."
        linkUrl="/components"
        linkText="View Active Projects"
        imgUrl={form3}
        imageDescription="picture of the onboarding form step 3"
      />
      <Heading
        browText="Start onboarding today"
        headingText="Ready to join?"
        description="This is content that describes this section."
        headingLevel="3"
      />
      <IconGrid icons={icons2} />
      <Hero
        mainHeading="Have you completed the pre-onboarding checklist?"
        buttonText="Start Onboarding"
      />
    </Layout>
  )
}

export default JoinPage

export const Head = () => <title>Join Us!</title>

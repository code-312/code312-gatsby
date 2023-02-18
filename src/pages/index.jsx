import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <h2>homepage</h2>
      <Hero />
      <Card />
      <Button text={'Submit'} small />
      <Button text={'Submit'} />
      <Button text={'Button'} secondary small/>
      <Button text={'Button'} secondary />
      {/* <Button text={'Join us on Slack'} textBtn small/>
      <Button text={'Join us on Slack'} textBtn /> */}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

import React from 'react'
import ContentSection from '../components/ContentSection'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <h2>homepage</h2>
      <Hero />
      <ContentSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

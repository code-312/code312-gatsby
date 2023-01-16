import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <h2>homepage</h2>
      <Hero />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

const Project = ({ data }) => {
  const html = data.markdownRemark.html
  const { title, thumbnail, imgText, description } =
    data.markdownRemark.frontmatter

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query PortfolioListQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        description
        title
        thumbnail
        imgtext
      }
    }
  }
`

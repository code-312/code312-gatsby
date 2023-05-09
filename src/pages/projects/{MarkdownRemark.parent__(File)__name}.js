import React from 'react'
import { graphql } from 'gatsby'

const Project = ({ data }) => {
  const title = data.markdownRemark.title
  const html = data.markdownRemark.html
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
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
      }
    }
  }
`

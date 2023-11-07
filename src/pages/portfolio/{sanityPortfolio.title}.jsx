import React from 'react'
import { graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'

import styled from 'styled-components'

const StyledPortfolio = styled.article`
  max-width: 75rem;
  padding: 3rem 3rem 4rem 3rem;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 40rem) {
    padding: 1.5rem 1.5rem;
  }

  h2 {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  // default styles for all PortableText
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li {
    max-width: 33.6875rem;
    margin: 0 auto;
    padding: 0.5rem 0;
  }

  .hero-image {
    margin-top: 1.5rem;
    margin-bottom: 5rem;
  }

  .subheading {
    text-align: center;
  }
`

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  // const { width, height } = getImageDimensions(value)
  return (
    <img
      src={value.asset.url}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: 'block',

        // Avoid jumping around with aspect-ratio CSS property
        // aspectRatio: width / height,
      }}
    />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  block: {
    // Ex. 1: customizing common block types
    h3: ({ children }) => <h3 className="heading-2">{children}</h3>,
    h4: ({ children }) => <h4 className="heading-3">{children}</h4>,
    h5: ({ children }) => <h5 className="heading-4">{children}</h5>,
    h6: ({ children }) => <h6 className="heading-5">{children}</h6>,
    p: ({ children }) => <p className="p1-body">{children}</p>,
  },
}

export default function Portfolio({ data }) {
  const portfolio = data.sanityPortfolio

  return (
    <Layout>
      <StyledPortfolio>
        <h2>
          <span className="eyebrow-text eyebrow-1">Case Studies</span>
          <span className={`heading-1`}>{portfolio.title}</span>
        </h2>
        {portfolio.subHeading && (
          <p className="p1-body subheading">{portfolio.subHeading}</p>
        )}

        <img
          className="hero-image"
          src={portfolio.mainImage.asset.url}
          alt={'TODO: Connect Alt Text'}
        />

        <PortableText value={portfolio._rawOverview} components={components} />
        <PortableText
          value={portfolio._rawMethodology}
          components={components}
        />
      </StyledPortfolio>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    sanityPortfolio(id: { eq: $id }) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      _rawOverview(resolveReferences: { maxDepth: 10 })
      _rawMethodology(resolveReferences: { maxDepth: 10 })
      subHeading
    }
  }
`

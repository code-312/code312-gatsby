import React from 'react'

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

export const components = {
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
    span: ({ children }) => <span className="p1-body">{children}</span>,
    unknown: ({ children }) => <div>{children}</div>,
  },
}

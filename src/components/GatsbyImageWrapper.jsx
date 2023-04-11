import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const GatsbyImageWrapper = ({ imageUrl, alt }) => {
  console.log(imageUrl)
  return (
    <StaticImage
      src={imageUrl}
      alt={alt}
      placeholder="blurred"
      layout="fixed"
      width={300}
      height={300}
    />
  )
}

export default GatsbyImageWrapper

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ImageWrapper = ({ image, alt }) => {
  return (
    <StaticImage
      src={image}
      alt={alt}
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
}

export default ImageWrapper

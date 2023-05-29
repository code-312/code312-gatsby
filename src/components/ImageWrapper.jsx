import React from 'react'

const ImageWrapper = ({ image, alt }) => {
  return (
    <img alt={alt} src={image}/>
  )
}

export default ImageWrapper

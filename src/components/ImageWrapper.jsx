import React from 'react'

const ImageWrapper = ({ image, alt }) => {
  console.log(image)
  return (
    <img alt={alt} src={image}/>
  )
}

export default ImageWrapper

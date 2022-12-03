import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ContentSection = ({
  eyebrowText,
  mainHeading,
  content,
  linkUrl,
  linkText,
  imgUrl,
  imageDescription,
}) => {
  return (
    <section>
      <div className="image-container">
        <GatsbyImage image={imgUrl} alt={imageDescription} />
      </div>
      <h3>
        <span>{eyebrowText}</span>
        {mainHeading}
      </h3>
      <p>{content}</p>
      <Link to={linkUrl}>{linkText}</Link>
    </section>
  )
}

export default ContentSection
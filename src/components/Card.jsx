import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Card = ({
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
      <div className="card-image-container">
        <GatsbyImage image={imgUrl} alt={imageDescription} />
      </div>
      <h2>
        <span>{eyebrowText}</span>
        {mainHeading}
      </h2>
      <p>{content}</p>
      <Link to={linkUrl}>{linkText}</Link>
    </section>
  )
}

export default Card

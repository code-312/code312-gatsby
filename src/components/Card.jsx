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
    <article>
      <div className="image-container">
        <img src={imgUrl} alt={imageDescription} />
      </div>
      <h3>
        <span>{eyebrowText}</span>
        {mainHeading}
      </h3>
      <p>{content}</p>
      <Link to={linkUrl}>{linkText}</Link>
    </article>
  )
}

export default Card

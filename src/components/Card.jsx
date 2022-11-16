import { Link } from 'gatsby'
import React from 'react'

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
        <img src={imgUrl} alt={imageDescription} />
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

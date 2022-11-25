import React from 'react'

const Hero = ({ eyebrowText, mainHeading, content, img, imgDescription }) => {
  return (
    <section>
      <h2>
        <span className="eyebrow-text">{eyebrowText}</span>
        {mainHeading}
      </h2>
      <p>{content}</p>
      <div className="hero-image-container">
        <img src={img} alt={imgDescription} />
      </div>
    </section>
  )
}

export default Hero

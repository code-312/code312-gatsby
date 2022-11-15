import React from 'react'
import skyline from '../images/skyline.svg'

const Hero = () => {
  return (
    <section>
      <div className="hero-content-container">
        <h4>A CODE FOR AMERICA BRIGADE</h4>
        <h1>Making community services work in a digital age</h1>
        <p>
          We forge partnerships between neighbors who use technology to improve
          interactions with, and access to, public services.
        </p>
      </div>
      <div className="hero-image-container">
        <img src={skyline} alt="skyline image" />
      </div>
    </section>
  )
}

export default Hero

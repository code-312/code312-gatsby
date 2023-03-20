import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/skyline.svg'

const StyledHeroSection = styled.section`
  background-color: var(--blizzard-blue);
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    padding-left: 3rem;
  }

  @media (min-width: 1400px) {
    padding-left: 6rem;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7rem 0 3.5rem;

    @media (min-width: 769px) {
      align-items: flex-start;
      width: 31.188rem;
    }
  }

  .eyebrow-text {
    font-style: normal;
    letter-spacing: 0.05em;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    height: 1.313rem;
    color: var(--blizzard-black);
    margin-bottom: 0.5rem;

    @media (min-width: 769px) {
      text-align: left;
    }
  }

  .main-heading {
    text-align: center;
    color: var(--blizzard-black);
    flex: none;
    margin-bottom: 0.5rem;

    @media (min-width: 649px) {
      margin: 0 3rem 0.5rem;
    }
    @media (min-width: 769px) {
      text-align: left;
      margin: 0;
    }
  }

  .hero-image-container {
    @media (min-width: 769px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0;
      gap: 0.625rem;
      height: 26.313rem;
      padding-top: 2rem;
      margin-top: 7rem;
    }

    @media (min-width: 1200px) {
      margin-top: 2rem;
    }
  }

  .hero-image {
    @media (min-width: 769px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
  }

  .button {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    background-color: var(--white);
    border: 2px solid #d90000;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
    color: var(--blizzard-black);
  }
`

const Hero = ({
  eyebrowText,
  mainHeading,
  img,
  imgDescription,
  buttonText,
}) => {
  return (
    <StyledHeroSection>
      <div className="content-container">
        <span className="eyebrow-text eyebrow-1">
          {eyebrowText ? eyebrowText : 'A code for america brigade'}
        </span>
        <h2 className="main-heading heading-1">
          {mainHeading ? mainHeading : 'Community service in a digital age'}
        </h2>
        <button className="button label-2">
          {buttonText ? buttonText : 'Get Started'}
        </button>
      </div>
      <div className="hero-image-container">
        <img
          src={img ? img : heroImg}
          alt={imgDescription}
          className="hero-image"
        />
      </div>
    </StyledHeroSection>
  )
}

export default Hero

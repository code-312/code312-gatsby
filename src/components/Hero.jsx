import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/skyline.svg'

const StyledHeroSection = styled.section`
  background-color: var(--cfa-hero-bg);
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    padding-left: 3rem;
    gap: 1.5rem;
  }

  @media (min-width: 1400px) {
    padding-left: 6rem;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3rem 1.5rem;

    @media (min-width: 769px) {
      align-items: flex-start;
      padding: 4rem 0;
      gap: 1.5rem;
      width: 31.188rem;
      height: 20.625rem;
    }
    @media (min-width: 1200px) {
      width: 33.75rem;
    }
  }

  .eyebrow-text {
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.05em;
    line-height: 1.313rem;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    height: 1.313rem;
    color: var(--tints-blizzard-black);

    @media (min-width: 649px) {
      font-size: 1.125rem;
    }

    @media (min-width: 769px) {
      text-align: left;
    }
  }

  .main-heading {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--tints-blizzard-black);
    line-height: 3.438rem;
    flex: none;

    @media (min-width: 649px) {
      font-size: 2.625rem;
      margin: 0 3rem;
    }
    @media (min-width: 769px) {
      text-align: left;
      margin: 0;
    }
    @media (min-width: 1200px) {
      padding-right: 1rem;
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
      width: 12.375rem;
      height: 26.313rem;
      padding-top: 4rem;
    }

    @media (min-width: 1000px) {
      width: 35rem;
    }

    @media (min-width: 1200px) {
      width: 38.25rem;
      flex-direction: row;
      justify-content: center;
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
    padding: 0.5rem 1rem;
    background-color: var(--white);
    border: 2px solid #d90000;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
    color: var(--tints-blizzard-black);
    font-weight: 600;
    font-size: 0.875rem;

    @media (min-width: 649px) {
      font-size: 1rem;
    }
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
        <span className="eyebrow-text">
          {eyebrowText ? eyebrowText : 'A code for america brigade'}
        </span>
        <h2 className="main-heading">
          {mainHeading ? mainHeading : 'Community service in a digital age'}
        </h2>
        <button className="button">
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

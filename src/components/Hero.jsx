import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/skyline.svg'
import Button from './Button'

const StyledHeroSection = styled.section`
  background-color: var(--blizzard-blue);
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 0rem;
    gap: 1.5rem;
  }

  .no-image {
    padding: 0;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;

    @media (min-width: 769px) {
      align-items: flex-start;
      width: 31.188rem;
    }
  }

  .container-no-image {
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
      padding-top: 2.4rem;
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
    line-height: 1.4;

    @media (min-width: 649px) {
      margin: 0 3rem 0.5rem;
    }
    @media (min-width: 769px) {
      text-align: left;
      margin: 0 0 1.5rem 0;
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

  .heading-no-image {
    text-align: center;
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
  link,
  arrow,
}) => {
  return (
    <StyledHeroSection className={img ? null : 'no-image'}>
      <div className={`content-container ${img ? null : 'container-no-image'}`}>
        <span className="eyebrow-text eyebrow-1">
          {eyebrowText ? eyebrowText : null}
        </span>
        <h2
          className={`main-heading heading-1 ${
            img ? null : 'heading-no-image'
          }`}
        >
          {mainHeading ? mainHeading : 'Community service in a digital age'}
        </h2>
        {buttonText && (
          <Button text={buttonText} link={link} arrow={arrow} center />
        )}
      </div>
      {img ? (
        <div className="hero-image-container">
          <img
            src={img ? img : heroImg}
            alt={imgDescription}
            className="hero-image"
          />
        </div>
      ) : null}
    </StyledHeroSection>
  )
}

export default Hero

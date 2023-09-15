import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/skyline.svg'
import Button from './Button'

const StyledHeroSection = styled.section`
  background-color: var(--blizzard-blue);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem 0 6rem 0;

    @media (min-width: 769px) {
      align-items: center;
      width: 31.188rem;
    }
  }

  .image-container {
    padding-left: 3rem;
  }

  .container-no-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 6rem 0;

    .eyebrow-text {
      text-align: center;
    }
  }

  .eyebrow-text {
    font-style: normal;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--blizzard-black);
  }

  .main-heading {
    text-align: center;
    color: var(--blizzard-black);
    flex: none;
    line-height: 1.4;

    @media (min-width: 649px) {
      margin: 0 3rem;
    }
    @media (min-width: 769px) {
      text-align: left;
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
  children,
  img,
  imgDescription,
  buttonText,
  link,
  arrow,
}) => {
  return (
    <StyledHeroSection>
      <div
        className={`content-container ${
          img ? 'image-container' : 'container-no-image'
        }`}
      >
        <h2>
          <div className="eyebrow-text eyebrow-1">
            {eyebrowText ? eyebrowText : null}
          </div>
          <div
            className={`main-heading heading-1 ${
              img ? null : 'heading-no-image'
            }`}
          >
            {mainHeading ? mainHeading : null}
          </div>
        </h2>
        {children}
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

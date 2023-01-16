import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import TestImage from '../images/TestImage.png'

const StyledContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  gap: 1.5rem;
  background: var(--white);

  @media (min-width: 649px) {
    padding: 4rem 3rem;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 1200px) {
      flex: 1;
    }
  }

  .info > h3 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.938rem;
    color: var(--tints-blizzard-black);
  }

  .info > h3 > span {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.313rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .info > p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .info > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    width: 6.25rem;
    height: 2.125rem;
    border: 2px solid var(--error-red);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
  }

  .image-container {
    @media (min-width: 1200px) {
      flex: 1;
    }
  }
`

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
    <StyledContentSection>
      <div className="info">
        <h3>
          <span>{eyebrowText ? eyebrowText : 'Organizations'}</span>
          {mainHeading
            ? mainHeading
            : 'Are you a Chicagoland nonprofit that needs some tech help?'}
        </h3>
        <p>
          {content
            ? content
            : "Have an idea how to make your community better? You've come to the right place. Either contact us or come to one of our meetups to get the conversation started. "}
        </p>
        <Link to={linkUrl}>{linkText ? linkText : 'Learn More'}</Link>
      </div>
      <div className="image-container">
        <img src={imgUrl ? imgUrl : TestImage} alt={imageDescription} />
      </div>
    </StyledContentSection>
  )
}

export default ContentSection

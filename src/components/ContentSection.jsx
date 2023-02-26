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
    color: var(--blizzard-black);
  }

  .info > h3 > span {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .info > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 6.25rem;
    height: 2.125rem;
    border: 2px solid var(--dark-red);
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
        <h3 className="heading-2">
          <span className="eyebrow-1">
            {eyebrowText ? eyebrowText : 'Organizations'}
          </span>
          {mainHeading
            ? mainHeading
            : 'Are you a Chicagoland nonprofit that needs some tech help?'}
        </h3>
        <p className="p1-body">
          {content
            ? content
            : "Have an idea how to make your community better? You've come to the right place. Either contact us or come to one of our meetups to get the conversation started. "}
        </p>
        <Link to={linkUrl} className="label-2">
          {linkText ? linkText : 'Learn More'}
        </Link>
      </div>
      <div className="image-container">
        <img src={imgUrl ? imgUrl : TestImage} alt={imageDescription} />
      </div>
    </StyledContentSection>
  )
}

export default ContentSection

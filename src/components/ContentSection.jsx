import React from 'react'
import styled from 'styled-components'
import TestImage from '../images/TestImage.png'
import Button from './Button'

const StyledContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  gap: 1.5rem;
  background: ${(props) => props.background || 'var(--white)'};

  @media (min-width: 649px) {
    padding: 4rem 3rem;
  }

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.imgLeft ? 'row-reverse' : 'row')};
    /* flex-direction: row; */
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
  background,
  imgLeft,
}) => {
  return (
    <StyledContentSection background={background} imgLeft={imgLeft}>
      <div className="info">
        <h3 className="heading-2">
          {eyebrowText && <span className="eyebrow-1">{eyebrowText}</span>}
          {mainHeading}
        </h3>
        <p className="p1-body">{content}</p>
        <Button text={linkText} link={linkUrl} />
      </div>
      <div className="image-container">
        <img src={imgUrl ? imgUrl : TestImage} alt={imageDescription} />
      </div>
    </StyledContentSection>
  )
}

export default ContentSection

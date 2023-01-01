import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import defaultCardImage from '../images/card-placeholder.svg'
import longRightArrowIcon from '../images/long-arrow-alt-right-red.svg'

const StyledCard = styled.article`
  width: 12.563rem;
  padding: 0px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  margin: 1rem;
  overflow: hidden;

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.938rem;
  }

  .eyebrow-text {
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1.313rem;
  }

  .card-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 10.603rem;
    padding: 1rem;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-content {
    font-weight: 400;
  }

  .card-link {
    font-weight: 600;
    color: var(--error-red);
    width: 10.603rem;
    display: block;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .disabled {
    color: gray;
  }
`

const Card = ({
  eyebrowText,
  mainHeading,
  content,
  linkUrl,
  linkText,
  imgUrl,
  imageDescription,
}) => {
  const [isDisabled, setIsDisabled] = useState(false)
  return (
    <StyledCard>
      <img
        src={imgUrl ? imgUrl : defaultCardImage}
        alt={imageDescription ? imageDescription : 'Description'}
      />
      <div className="card-details">
        <div className="content-container">
          <h3 className="card-header">
            <span className="eyebrow-text">
              {eyebrowText ? eyebrowText : 'Subtitle'}
            </span>
            {mainHeading ? mainHeading : 'Title'}
          </h3>
          <p className="card-content">
            {content
              ? content
              : 'content dkajskldjas kdnaskdnajs djansljdnasld'}
          </p>
        </div>
        <div className="buttons-container">
          {isDisabled ? (
            <Link
              to={linkUrl}
              className="card-link disabled"
              disabled={isDisabled}
            >
              More Info Coming Soon
            </Link>
          ) : (
            <Link to={linkUrl} className="card-link">
              Join us on Slack
              <img src={longRightArrowIcon} alt="right-arrow" />
            </Link>
          )}
        </div>
      </div>
    </StyledCard>
  )
}

export default Card

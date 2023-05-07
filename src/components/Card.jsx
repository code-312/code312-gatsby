import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import defaultCardImage from '../images/card-placeholder.svg'
import arrow from '../images/long-arrow-right-red.svg'

const StyledCard = styled.article`
  width: 12.563rem;
  padding: 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  margin: 1rem;
  overflow: hidden;

  #card-image{
    width: 100%;
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .eyebrow-text {
    text-transform: uppercase;
  }

  .card-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 10.603rem;
    max-width: 100%;
    padding: 1rem;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-link {
    color: var(--dark-red);
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
        id="card-image"
        src={imgUrl ? imgUrl : defaultCardImage}
        alt={imageDescription ? imageDescription : 'Description'}
      />
      <div className="card-details">
        <div className="content-container">
          <h3 className="card-header heading-3">
            <span className="eyebrow-text eyebrow-1">
              {eyebrowText ? eyebrowText : 'Subtitle'}
            </span>
            {mainHeading ? mainHeading : 'Title'}
          </h3>
          <p className="p2-body ">
            {content
              ? content
              : 'content dkajskldjas kdnaskdnajs djansljdnasld'}
          </p>
        </div>
        <div className="buttons-container">
          {isDisabled ? (
            <Link
              to={linkUrl}
              className="card-link label-2 disabled"
              disabled={isDisabled}
            >
              More Info Coming Soon
            </Link>
          ) : (
            <Link to={linkUrl} className="card-link label-2">
              Join us on Slack
              <img src={arrow} alt="right-arrow" />
            </Link>
          )}
        </div>
      </div>
    </StyledCard>
  )
}

export default Card

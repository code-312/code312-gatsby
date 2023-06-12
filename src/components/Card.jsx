import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import arrow from '../images/long-arrow-right-red.svg'

const StyledCard = styled.article`
  background-color: var(--white);
  width: 12.563rem;
  max-width: 16.12rem;
  padding: 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  margin: 1rem;
  overflow: hidden;

  .image {
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

  .labels-container {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .label-areas {
    background-color: var(--light-grey);
    padding: 0.25rem;
    border-radius: 0.1375rem;
    white-space: nowrap;
    flex-grow: 0;
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
  labels,
}) => {
  const [isDisabled, setIsDisabled] = useState(false)
  return (
    <StyledCard>
      {typeof imgUrl === 'object' ? (
        <GatsbyImage
          image={getImage(imgUrl)}
          alt={imageDescription}
          className="image"
        />
      ) : (
        <img alt={imageDescription} className="image" src={imgUrl} />
      )}
      <div className="card-details">
        <div className="content-container">
          <h3 className="card-header heading-3">
            <span className="eyebrow-text eyebrow-1">
              {eyebrowText ? eyebrowText : null}
            </span>
            {mainHeading ? mainHeading : null}
          </h3>
          <p className="p2-body ">
            {content
              ? content
              : 'content dkajskldjas kdnaskdnajs djansljdnasld'}
          </p>
        </div>
        {linkUrl ? (
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
        ) : null}
        {labels ? (
          <div className="labels-container">
            {labels.map((label) => {
              return <span className="label-areas label-3">{label}</span>
            })}
          </div>
        ) : null}
      </div>
    </StyledCard>
  )
}

export default Card

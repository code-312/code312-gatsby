import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledTile = styled.article`
  /* padding-top: 1rem;
  padding-bottom: 1rem; */
  max-width: 16rem;
  /* min-height: 12.56rem; */
  padding: 0.5rem 1rem;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-basis: 44%;
    width: 40vw;
    min-width: 7.25rem;
  }

  .tile-icon {
    margin-top: 1rem;
    height: 1.5rem;
    width: 1.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .tile-p {
    padding-bottom: 1rem;
  }

  .tile-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const IconTile = ({ icon, title, description, btnText, linkUrl }) => {
  return (
    <StyledTile>
      <div className="tile-content-container">
        {icon && <img className="tile-icon" src={icon} alt={title} />}
        {title && <h4 className="heading-3">{title}</h4>}
        {description && <p className="tile-p p2-body">{description}</p>}
        {btnText && (
          <Button text={btnText} link={linkUrl} textBtn arrow center />
        )}
      </div>
    </StyledTile>
  )
}

export default IconTile

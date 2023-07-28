import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledTile = styled.article`
  background-color: var(--white);
  min-height: 11.4375rem;
  max-width: 16rem;
  min-width: 12rem;
  padding: 0.5rem 1rem;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;

  h4 {
    text-align: center;
  }

  .tile-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .tile-body {
    gap: .5rem;
  }
`

const IconTile = ({ icon, title, description, btnText, linkUrl }) => {
  return (
    <StyledTile>
      {icon && <img className="tile-icon" src={icon} alt={title} />}
      <div className='tile-body'>
        {title && <h4 className="heading-3">{title}</h4>}
        {description && <p className="p2-body">{description}</p>}
      </div>
      {btnText && <Button text={btnText} link={linkUrl} textBtn arrow center />}
    </StyledTile>
  )
}

export default IconTile

import React from 'react'
import styled from 'styled-components'

const StyledTile = styled.article`
  max-width: 16.0625rem;
  height: 11.4375rem;
  padding: 0 1rem;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  h4 {
    text-align: center;
  }
`

const IconTile = ({ icon, title, description }) => {
  return (
    <StyledTile>
      {icon && <img src={icon} alt={title} />}
      {title && <h4 className="heading-3">{title}</h4>}
      {description && <p className="p2-body">{description}</p>}
    </StyledTile>
  )
}

export default IconTile

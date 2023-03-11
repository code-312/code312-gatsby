import React from 'react'
import styled from 'styled-components'

const StyledTile = styled.article`
  width: 16.0625rem;
`

const IconTile = ({ icon, title, description }) => {
  return (
    <StyledTile>
      {icon && <img src={icon} alt={title} />}
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
    </StyledTile>
  )
}

export default IconTile

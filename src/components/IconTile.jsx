import React from 'react'
import styled from 'styled-components'

const StyledTile = styled.article`
  width: 16.0625rem;
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

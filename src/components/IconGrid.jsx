import React from 'react'
import styled from 'styled-components'
import IconTile from '../components/IconTile'

const StyledIconGrid = styled.div`
  max-width: 68.75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 1.5rem;
`

const IconGrid = ({ icons }) => {
  console.log(icons.length)
  return (
    <StyledIconGrid>
      {icons.map((icon) => {
        return (
          <IconTile
            icon={icon.img}
            title={icon.title}
            description={icon.description}
            key={icon.title}
          />
        )
      })}
    </StyledIconGrid>
  )
}
export default IconGrid

import React from 'react'
import styled from 'styled-components'
import IconTile from '../components/IconTile'

const StyledIconGrid = styled.div`
  max-width: 68.75rem;
  margin: 0 auto;
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 1080px) {
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
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
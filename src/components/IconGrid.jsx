import React from 'react'
import styled from 'styled-components'
import IconTile from '../components/IconTile'

const StyledIconGrid = styled.div`
  width: 100vw;
  max-width: 89.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  gap: 1.5rem;
  padding: 0 2rem 2rem;

  @media (max-width: 1080px) {
    gap: 1.5rem;
  }
`

const IconGrid = ({ icons }) => {
  return (
    <StyledIconGrid>
      {icons.map((icon) => {
        return (
          <IconTile
            icon={icon.img}
            title={icon.title}
            description={icon.description}
            key={icon.title}
            btnText={icon.btnText ? icon.btnText : null}
            linkUrl={icon.linkUrl ? icon.linkUrl : null}
          />
        )
      })}
    </StyledIconGrid>
  )
}
export default IconGrid

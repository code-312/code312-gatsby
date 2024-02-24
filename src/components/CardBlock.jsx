import React from 'react'
import styled from 'styled-components'

const StyledCardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 76rem;
  margin: 0 auto;
  padding-bottom: 4rem;
  .card-item {
    display: flex;
  }
`

const CardBlock = ({ children }) => (
  <StyledCardContainer>{children}</StyledCardContainer>
)

export default CardBlock

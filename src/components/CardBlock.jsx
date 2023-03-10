import React from "react";
import styled from "styled-components";

  

const CardBlock = ({ children }) => {
  const StyledCardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  width: 100vw;
  article{
    flex: 1 1 100%;
    @media (min-width: 320px) {
      flex: 0 1 45%;
    }
    @media (min-width: 650px) {
      flex: 0 1 45%;
    }
    @media (min-width: 769px) {
      flex: 0 1 ${children.length > 3 ? '30%' : '45%'};
      &:last-child{
        justify-self:center;
      }
    }
    @media (min-width: 1200px) {
      flex: 0 0 ${children.length > 3 ? '20%' : '30%'};
    }
  }
`

  return (
    <StyledCardContainer>
        {children}
    </StyledCardContainer>
  )
}

  


export default CardBlock;
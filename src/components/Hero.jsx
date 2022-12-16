import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  background-color: #b3ddf2;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    padding-left: 3rem;
    gap: 1.5rem;
  }
`

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem 1.5rem;

  @media (min-width: 769px) {
    align-items: flex-start;
    padding: 4rem 0px;
    gap: 1.5rem;
    width: 499px;
    height: 330px;
  }
  @media (min-width: 1200px) {
    width: 540px;
  }
`

const StyledEyebrowText = styled.span`
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  height: 21px;
  color: #001426;

  @media (min-width: 649px) {
    font-size: 1.125rem;
  }
`
const StyledHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #001426;
  flex: none;

  @media (min-width: 649px) {
    font-size: 2.625rem;
  }
  @media (min-width: 769px) {
    text-align: left;
  }
`

const StyledHeroImageContainer = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;
    gap: 0.625rem;
    width: 198px;
    height: 421px;
    padding-top: 4rem;
  }

  @media (min-width: 1200px) {
    width: 612px;
  }
`

const StyledHeroImage = styled.img`
  @media (min-width: 769px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
`

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border: 2px solid #d90000;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2.2px;
  color: #001426;
  font-weight: 600;
  font-size: 0.875rem;

  @media (min-width: 649px) {
    font-size: 1rem;
  }
`

const Hero = ({
  eyebrowText,
  mainHeading,
  img,
  imgDescription,
  buttonText,
}) => {
  return (
    <StyledHeroSection>
      <StyledContentContainer>
        <StyledEyebrowText>{eyebrowText}</StyledEyebrowText>
        <StyledHeading>{mainHeading}</StyledHeading>
        <StyledButton>{buttonText}</StyledButton>
      </StyledContentContainer>
      <StyledHeroImageContainer>
        <StyledHeroImage src={img} alt={imgDescription} />
      </StyledHeroImageContainer>
    </StyledHeroSection>
  )
}

export default Hero

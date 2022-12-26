import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/skyline.svg'

const StyledHeroSection = styled.section`
  background-color: var(--cfa-hero-bg);

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
    padding: 4rem 0;
    gap: 1.5rem;
    width: 31.188rem;
    height: 20.625rem;
  }
  @media (min-width: 1200px) {
    width: 33.75rem;
  }
`

const StyledEyebrowText = styled.span`
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.313rem;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  height: 1.313rem;
  color: var(--tints-blizzard-black);

  @media (min-width: 649px) {
    font-size: 1.125rem;
  }
`
const StyledHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--tints-blizzard-black);
  line-height: 3.438rem;
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
    padding: 0;
    gap: 0.625rem;
    width: 12.375rem;
    height: 26.313rem;
    padding-top: 4rem;
  }

  @media (min-width: 1200px) {
    width: 38.25rem;
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
  background-color: var(--white);
  border: 2px solid #d90000;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2.2px;
  color: var(--tints-blizzard-black);
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
        <StyledEyebrowText>
          {eyebrowText ? eyebrowText : 'A code for america brigade'}
        </StyledEyebrowText>
        <StyledHeading>
          {mainHeading ? mainHeading : 'Community service in a digital age'}
        </StyledHeading>
        <StyledButton>{buttonText ? buttonText : 'Get Started'}</StyledButton>
      </StyledContentContainer>
      <StyledHeroImageContainer>
        <StyledHeroImage src={img ? img : heroImg} alt={imgDescription} />
      </StyledHeroImageContainer>
    </StyledHeroSection>
  )
}

export default Hero

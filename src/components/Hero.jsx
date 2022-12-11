import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
  background-color: #b3ddf2;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 48px;
    gap: 24px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px 24px;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 64px 0px;
    gap: 24px;
    width: 499px;
    height: 330px;
  }
  @media (min-width: 1200px) {
    width: 540px;
  }
`

const EyebrowText = styled.span`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.05em;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  height: 21px;
  color: #001426;

  @media (min-width: 649px) {
    font-size: 18px;
  }
`
const Heading = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #001426;
  font-family: 'Source Sans Pro';
  flex: none;

  @media (min-width: 649px) {
    font-size: 42px;
  }
  @media (min-width: 769px) {
    text-align: left;
  }
`

const HeroImageContainer = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 198px;
    height: 421px;
    padding-top: 64px;
  }

  @media (min-width: 1200px) {
    width: 612px;
  }
`

const HeroImage = styled.img`
  @media (min-width: 769px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
`

const Button = styled.button`
  padding: 8px 16px;
  background-color: #ffffff;
  border: 2px solid #d90000;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2.2px;
  color: #001426;
  font-weight: 600;
  font-size: 14px;

  @media (min-width: 649px) {
    font-size: 16px;
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
    <HeroSection>
      <ContentContainer>
        <EyebrowText>{eyebrowText}</EyebrowText>
        <Heading>{mainHeading}</Heading>
        <Button>{buttonText}</Button>
      </ContentContainer>
      <HeroImageContainer>
        <HeroImage src={img} alt={imgDescription} />
      </HeroImageContainer>
    </HeroSection>
  )
}

export default Hero

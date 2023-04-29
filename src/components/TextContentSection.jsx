import React from "react";
import styled from "styled-components";

const StyledTextComponentSection = styled.section`
  background: ${(props) => props.background || 'var(--white)'};
  .width-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    @media (min-width: 649px) {
      padding: 4rem 3rem;
    }

    @media (min-width: 769px) {
      flex-direction: ${(props) => (props.imgLeft ? 'row-reverse' : 'row')};
    }
  }
  .heading-2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--blizzard-black);
  }
`

const TextContentSection = ({ eyebrowText, mainHeading, children, background, content }) => {
  return (
    <StyledTextComponentSection background={background}>
      <div className="width-wrapper">
        <h3 className="heading-2">
          {eyebrowText && <span className="eyebrow-1">{eyebrowText}</span>}
          {mainHeading}
        </h3>
        <p>{content}</p>
          {children}
      </div>
    </StyledTextComponentSection>
  )
}
export default TextContentSection
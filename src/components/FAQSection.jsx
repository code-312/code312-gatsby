import React from 'react'
import styled from 'styled-components'

const StyledFAQSection = styled.section`
  background: ${(props) => props.background || 'var(--white)'};
  .eyebrow-1 {
    text-transform: uppercase;
  }
  .width-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 3rem;
    gap: 1.5rem;

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0rem;
      gap: 1.5rem;
      width: 33.68rem;
    }

    .info > h3 > span {
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }
  .heading-2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--blizzard-black);
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.63rem;
    font-style: normal;
  }
  .content > p {
    order: 2;
    font-weight: 25rem;
    font-size: 1.25rem;
  }
`

const FAQSection = ({ eyebrowText, mainHeading, children, background }) => {
  return (
    <StyledFAQSection background={background}>
      <div className="width-wrapper">
        <div className="info">
          <h2 className="heading-2">
            {eyebrowText && <span className="eyebrow-1">{eyebrowText}</span>}
            {mainHeading}
          </h2>
          <div className="content">{children}</div>
        </div>
      </div>
    </StyledFAQSection>
  )
}
export default FAQSection

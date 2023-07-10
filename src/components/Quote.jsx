import React from 'react'
import styled from 'styled-components'

const StyledQuote = styled.section`
  background: ${(props) => props.background || 'var(--light-grey)'};

  .quote-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 3rem;
    gap: 1.5rem;
  }
  .blockquote {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    width: 33.6875rem;
    font-weight: 300;
    font-style: normal;
  }
  .quote {
    font-weight: 300;
  }
  .heading-3 {
    flex: none;
    align-self: stretch;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 600;
  }
`

const Quote = ({ quote, author, source, background }) => {
  return (
    <StyledQuote background={background}>
      <div className="quote-wrapper">
        <blockquote className="blockquote">
          <p className="quote">{quote}</p>
          <cite className="heading-3">
            {author},{source}
          </cite>
        </blockquote>
      </div>
    </StyledQuote>
  )
}
export default Quote

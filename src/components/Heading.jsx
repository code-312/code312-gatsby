import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.div`
  color: var(--tints-blizzard-black);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 auto;
  max-width: 35.1875rem;

  .eyebrow-1 {
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }

  button,
  a {
    margin-top: 1rem;
  }
`

const Heading = ({
  headingText,
  browText,
  headingLevel = '3',
  description,
  children,
}) => {
  const HeadingTag = `h${headingLevel}`

  return (
    <StyledHeading>
      <HeadingTag>
        {browText && (
          <>
            <span className="eyebrow-1">{browText}</span>
            <br />
          </>
        )}
        <span className="heading-2">{headingText}</span>
      </HeadingTag>
      {description && <p className="p1-body">{description}</p>}
      {children}
    </StyledHeading>
  )
}

export default Heading

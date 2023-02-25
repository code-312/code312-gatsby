import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.div`
  color: var(--tints-blizzard-black);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 4rem 1.5rem 3rem;
  max-width: 35.1875rem;

  .eyebrow-1 {
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }
`

const Heading = ({
  headingText,
  browText,
  headingLevel = '3',
  description,
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
    </StyledHeading>
  )
}

export default Heading

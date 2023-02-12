import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.div`
  color: var(--tints-blizzard-black);
  text-align: center;

  .brow {
    font-size: 1.125rem;
    font-weight: 600;
  }

  .heading {
    font-size: 2rem;
    font-weight: 700;
  }

  .description {
    font-weight: 400;
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
            <span className="brow">{browText}</span>
            <br />
          </>
        )}
        <span className="heading">{headingText}</span>
      </HeadingTag>
      {description && <p className="description">{description}</p>}
    </StyledHeading>
  )
}

export default Heading

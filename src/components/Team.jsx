import React from 'react'
import styled from 'styled-components'

const StyledTeam = styled.section`
  background-color: var(--light-grey);
  .width-wrapper {
    display: flex;
    padding: 4rem 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    align-self: stretch;

    .content {
      display: flex;
      flex-direction: column;
      padding: 0rem;
      gap: 3rem;
      text-align: center;
    }

    .content > h2 > span {
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }
  .heading-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .leadership {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    @media screen and (max-width: 426px) {
      flex-direction: column;
    }
  }
`

const Team = ({ eyebrowText, mainHeading, children, background }) => {
  return (
    <StyledTeam background={background}>
      <div className="width-wrapper">
        <div className="content">
          <h2 className="heading-2">
            {eyebrowText && <span className="eyebrow-1">{eyebrowText}</span>}
            {mainHeading}
          </h2>
          <div className="leadership">{children}</div>
        </div>
      </div>
    </StyledTeam>
  )
}
export default Team

import React from 'react'
import styled from 'styled-components'

const StyledFullWidthTile = styled.div`
  width: 100%;
  background-color: var(--white);
  min-height: 11.4375rem;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  width: 100%;

  h4 {
    text-align: center;
  }

  .tile-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .tile-body {
    gap: 0.5rem;
  }

  p {
    max-width: 24.375rem;
  }
`

const FullWidthTile = ({ icon, title, description, btnText, linkUrl }) => {
  return (
    <StyledFullWidthTile>
      {icon && <img className="tile-icon" src={icon} alt={title} />}
      <div className="tile-body">
        {title && <h4 className="heading-3">{title}</h4>}
        {description && <p className="p2-body">{description}</p>}
      </div>
      {/* {btnText && <Button text={btnText} link={linkUrl} textBtn arrow center />} */}
    </StyledFullWidthTile>
  )
}
export default FullWidthTile

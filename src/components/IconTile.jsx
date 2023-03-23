import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import arrow from '../images/text-button-arrow.svg'

const StyledTile = styled.article`
  min-height: 11.4375rem;
  max-width: 16rem;
  min-width: 12rem;
  padding: 0 1rem;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.25rem;
  width: 100%;

  h4 {
    text-align: center;
  }

  .tile-link {
    text-decoration: none;
    color: var(--red);
    /* width: 10.603rem; */
    display: block;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const IconTile = ({ icon, title, description, btnText, linkUrl }) => {
  return (
    <StyledTile>
      {icon && <img src={icon} alt={title} />}
      {title && <h4 className="heading-3">{title}</h4>}
      {description && <p className="p2-body">{description}</p>}
      {btnText && (
        <Link to={linkUrl} className="tile-link label-2">
          {btnText}
          <img src={arrow} alt="right-arrow" />
        </Link>
      )}
    </StyledTile>
  )
}

export default IconTile

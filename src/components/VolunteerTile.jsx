import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const StyledVolunteerTile = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: ${(props) => (props.fullWidth ? 'start' : 'center')};
  align-items: center;
  padding: 1rem 1rem;
  width: ${(props) => (props.fullWidth ? '100%' : '16.0625rem')};
  background: var(--white);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;

  article {
    display: flex;
    flex-direction: ${(props) => (props.fullWidth ? 'row' : 'column')};
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .cardImage {
    height: 6rem;
    width: 6rem;
    left: 4.0312rem;
    top: 1rem;
    border-radius: 50%;
  }
  .details {
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem;
    gap: 0.5rem;
  }
  .eyebrow {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-500);
  }
  .name {
    font-weight: 700;
  }
`

const VolunteerTile = ({
  imageSrc,
  description,
  memberName,
  positionTitle,
  fullWidth,
}) => {
  return (
    <StyledVolunteerTile fullWidth={fullWidth}>
      <article className="card">
        {imageSrc && <img className="cardImage" src={imageSrc} alt={description} />}
        <div className="details">
          <p className='eyebrow'>PRIMARY CONTACT</p>
          <h4 className="heading-3 name">{memberName}</h4>
          <p className="title">{positionTitle}</p>
        </div>
      </article>
    </StyledVolunteerTile>
  )
}
export default VolunteerTile

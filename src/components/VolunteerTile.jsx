import React from "react";
import styled from "styled-components";

const StyledVolunteerTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  width: 16.0625rem;
  height: 12.4375rem;
  background: var(--white);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  .cardImage {
    height: 6rem;
    width: 6rem;
    left: 4.0312rem;
    top: 1rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem;
    gap: 0.5rem;
  }
  .name {
    font-weight: 700;
  }
`

const VolunteerTile = ({imageSrc, description, memberName, positionTitle}) => {
  return (
    <StyledVolunteerTile>
      <article className="card">
        <img className="cardImage"
          src={imageSrc} alt={description} />
        <div className="details">
          <h4 className="name">{memberName}</h4>
          <p className="title">{positionTitle}</p> 
        </div>
      </article>
    </StyledVolunteerTile>
  )
}
export default VolunteerTile
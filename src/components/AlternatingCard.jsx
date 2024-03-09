import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledAlternatingCard = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.imgLeft ? 'row' : 'row-reverse')};
  gap: 1.5rem;

  max-width: 75rem;
  padding: 4rem 3rem;
  margin: 0 auto;
  width: 100%;

  h3 > span {
    display: block;
  }

  img {
    max-width: 48%;
  }

  .info {
    max-width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  @media (max-width: 720px) {
    padding: 2.5rem 1.5rem;
    flex-direction: column-reverse;
    gap: 1.5rem;

    img,
    .info {
      width: 100%;
      max-width: 100%;
    }
  }
`

const AlternatingCard = ({
  thumbnail,
  alt,
  eyebrow,
  title,
  description,
  url,
  urlText,
  imgLeft,
}) => {
  return (
    <StyledAlternatingCard imgLeft={imgLeft}>
      <img src={thumbnail} alt={alt} />
      <div className="info">
        <h3>
          <span className="eyebrow-1">{eyebrow}</span>
          <span className="heading-2">{title}</span>
        </h3>
        <p className="p1-body">{description}</p>
        {urlText && url && <Button text={urlText} link={url} />}
      </div>
    </StyledAlternatingCard>
  )
}

export default AlternatingCard

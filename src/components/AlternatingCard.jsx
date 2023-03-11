import React from 'react'

const AlternatingCard = ({
  thumbnail,
  alt,
  areas,
  title,
  description,
  url,
  urlText,
}) => {
  return (
    <>
      <div className="card-img-container">
        <img src={thumbnail} alt={alt} />
      </div>
      <div className="image-left-card-text">
        <div className="card-info">
          <h5 className="cardTitle eyebrow-1">{areas}</h5>
          <h2 className="cardText heading-2">{title}</h2>
          <p className="cardText p1-body">{description}</p>
          <p className="label-2">
            <a href={url} target="_blank">
              {urlText}
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default AlternatingCard

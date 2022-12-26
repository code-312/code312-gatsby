import React from 'react'

const AlternatingCard = ({thumbnail, alt, areas, title, description, url, urlText}) => {
  return (
    <>
      <div className="card-img-container">
        <img src={thumbnail} alt={alt} />
      </div>
      <div className="image-left-card-text">
        <div className="card-info">
          <h5 className="cardTitle">{areas}</h5>
          <h2 className="cardText">{title}</h2>
          <p className="cardText">{description}</p>
          <p>
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

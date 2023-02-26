import React from 'react'

const IconTile = ({ icon, title, description }) => {
  return (
    <article>
      <img src={icon} alt={title} />
      <h4 className="heading-3">{title}</h4>
      <p className="p2-body">{description}</p>
    </article>
  )
}

export default IconTile

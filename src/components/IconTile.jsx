import React from 'react'

const IconTile = ({ icon, title, description }) => {
  return (
    <article>
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
}

export default IconTile

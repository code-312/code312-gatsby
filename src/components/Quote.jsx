import React from "react";


const Quote = ({quote, author, source}) => (
  <figure>
    <blockquote>
      <p>{quote}</p>
    </blockquote>
    <figcaption>-{author},<cite>{source}</cite></figcaption>
  </figure>
)

export default Quote
import React from 'react'

const Quote = ({ quote, author, source }) => (
  <blockquote>
    <p className="quote">{quote}</p>
    <cite className="heading-3">
      {author}, <cite></cite>
      {source}
    </cite>
  </blockquote>
)

export default Quote

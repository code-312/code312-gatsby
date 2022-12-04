import React from "react";


const Quote = ({quote, author, source}) => (
    <blockquote>
      <p>{quote}</p>
      <cite>-{author}, <cite></cite>{source}</cite>
    </blockquote>
 
)

export default Quote
import React from 'react'
import { Link } from 'gatsby'

const CallToAction = ({ title, link, buttonDisplay }) => (
  <section>
    <h3 className="">{title}</h3>
    <Link to={link}>{buttonDisplay}</Link>
  </section>
)

export default CallToAction

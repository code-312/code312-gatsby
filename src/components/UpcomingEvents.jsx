import React from 'react'
import { Link } from 'gatsby'

const UpcomingEvents = () => {
  return (
    <section>
      <h1>No Upcoming Events</h1>
      <p>
        Join our <Link to="">Meeting group</Link> to stay up to date on what's
        coming up.
      </p>
      <button>
        <Link to="">Join our Meetup group</Link>
      </button>
    </section>
  )
}

export default UpcomingEvents

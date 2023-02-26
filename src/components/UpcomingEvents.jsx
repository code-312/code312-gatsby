import React from 'react'

const UpcomingEvents = () => {
  return (
    <section>
      <h3 className="heading-2">No Upcoming Events</h3>
      <p className="p1-body">
        Join our{' '}
        <a
          href="https://www.meetup.com/code-for-chicago/"
          target="_blank"
          rel="noreferrer"
        >
          Meeting group
        </a>{' '}
        to stay up to date on what's coming up.
      </p>
      <a
        href="https://www.meetup.com/code-for-chicago/?action=join&_cookie-check=mMhgrIfroDbiH7dR"
        target="_blank"
        rel="noreferrer"
        className="label-2"
      >
        Join our Meetup group
      </a>
    </section>
  )
}

export default UpcomingEvents

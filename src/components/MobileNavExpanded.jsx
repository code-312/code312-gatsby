import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'
import meetup from '../images/meetup.svg'

const StyledMobileNav = styled.nav`
  width: 100%;

  .internal-links {
    list-style: none;
    padding: 0;

    li {
      height: 3.313rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      a {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--blizzard-black);
        border-bottom: 1px solid var(--light-grey);
      }
    }
  }

  @media (min-width: 648px) {
    .internal-links {
      li a {
        padding: 1rem 3rem;
      }
    }
  }

  .external-links {
    margin: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 0.625rem;
    padding: 1rem 1.5rem;
    height: 3.528rem;

    li {
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    @media (min-width: 648px) {
      padding: 1rem 3rem;
    }
  }
  .social-img {
    min-width: 1.5rem;
  }
`

const MobileNavExpanded = () => {
  return (
    <StyledMobileNav>
      <ul className="internal-links label-1">
        <li activeClassName="active">
          <Link to="/projects">Projects</Link>
        </li>
        <li activeClassName="active">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li activeClassName="active">
          <Link to="/join">Join Us</Link>
        </li>
        <li activeClassName="active">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul className="external-links">
        <li className="social-logo">
          <a
            href="https://www.meetup.com/code-for-chicago"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-img" src={meetup} alt="Meetup" />
          </a>
        </li>
        <li className="social-logo">
          <a
            href="https://code-for-chicago-slack-invite.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-img" src={slackLogo} alt="Slack" />
          </a>
        </li>
        <li className="social-logo">
          <a
            href="https://github.com/Code-For-Chicago/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-img" src={githubLogo} alt="GitHub" />
          </a>
        </li>
      </ul>
    </StyledMobileNav>
  )
}

export default MobileNavExpanded

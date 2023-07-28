import React from 'react'
import { Link } from 'gatsby'
import brigadeLogo from '../images/cfc_logo_2021.svg'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'
import meetup from '../images/meetup.svg'
import styled from 'styled-components'
import MobileNav from './MobileNav'
import Button from './Button'
import useWindow from '../hooks/useWindow'

const StyledNav = styled.nav`
  height: 6rem;
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--white);
  overflow: hidden;

  .internal-links {
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;
    gap: 2rem;

    a {
      color: var(--black);
      text-decoration: none;
    }
  }

  .brigade-logo {
    display: block;
    height: auto;
    min-width: 7.5rem;

    @media (max-width: 576px) {
      min-width: 5.313rem;
    }
  }
  .donate-and-socials-container {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
  }
  .external-links {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 1rem;
    padding: 0;

    .donate {
      margin-left: 1rem;
    }
  }
  .social-img {
    min-width: 1.875rem;
  }

  .meetup {
    min-width: 2.25rem;
  }
`

const Nav = () => {
  const windowWidth = useWindow()

  if (windowWidth < 1200) {
    return <MobileNav windowWidth={windowWidth} />
  }
  return (
    <StyledNav className="width-wrapper" aria-label="main">
      <ul className="internal-links label-1">
        <li id="logo-container">
          <Link to="/">
            <img
              className="brigade-logo"
              src={brigadeLogo}
              alt="Code For Chicago Logo"
            />
          </Link>
        </li>
        <li activeclassname="active">
          <Link to="/projects">Projects</Link>
        </li>
        <li activeclassname="active">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li activeclassname="active">
          <Link to="/join">Join Us</Link>
        </li>
        <li activeclassname="active">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="donate-and-socials-container">
        <ul className="external-links">
          <li className="social-logo">
            <a
              href="https://www.meetup.com/code-for-chicago"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img meetup" src={meetup} alt="Meetup" />
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
          <li className="donate">
            <Button
              link="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
              text="Donate"
              arrow
            />
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

export default Nav

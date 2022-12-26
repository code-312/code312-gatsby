import React from 'react'
import { Link } from 'gatsby'
import hamburgerOpenMenu from '../images/hamburger-open-menu.svg'
import brigadeLogo from '../images/cfc_logo_2021.svg'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'
import meetup from '../images/meetup.svg'
import styled from 'styled-components'

const StyledNav = styled.nav`
  height: 6rem;
  padding: 1.5rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--nav-background-color);

  .hamburgerMenu {
    display: none;
  }

  .internalLinks {
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;
    gap: 2rem;

    a {
      color: var(--nav-internal-links-color);
      text-decoration: none;
    }
  }

  .brigadeLogo {
    display: block;
    height: auto;
    min-width: 7.5rem;

    @media (max-width: 576px) {
      min-width: 5.313rem;
    }
  }
  .donateAndSocialsContainer {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
  }
  .externalLinks {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 2rem;
    margin-right: 1.5rem;
    padding: 0;
  }
  .socialImg {
    min-width: 1.5rem;
  }
`

const Nav = () => {
  return (
    <StyledNav className="navbar" aria-label="main">
      <button aria-label="open" className="hamburgerMenu">
        <img src={hamburgerOpenMenu} alt="open menu" aria-hidden="true" />
      </button>
      <ul className="internalLinks">
        <li id="logoContainer">
          <Link to="/">
            <img
              className="brigadeLogo"
              src={brigadeLogo}
              alt="Code For Chicago Logo"
            />
          </Link>
        </li>
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
      <div className="donateAndSocialsContainer">
        <ul className="externalLinks">
          <li className="socialLogo">
            <a
              href="https://www.meetup.com/code-for-chicago"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socialImg" src={meetup} alt="Meetup" />
            </a>
          </li>
          <li className="socialLogo">
            <a
              href="https://code-for-chicago-slack-invite.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socialImg" src={slackLogo} alt="Slack" />
            </a>
          </li>
          <li className="socialLogo">
            <a
              href="https://github.com/Code-For-Chicago/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socialImg" src={githubLogo} alt="GitHub" />
            </a>
          </li>
        </ul>
        <a
          href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
          target="blank"
          rel="noopener noreferrer"
          className="button donateButton"
        >
          Donate
        </a>
      </div>
    </StyledNav>
  )
}

export default Nav

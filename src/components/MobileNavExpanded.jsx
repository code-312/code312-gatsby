import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'

const StyledMobileNav = styled.nav`
  border-top: 1px solid var(--light-grey);
  position: absolute;
  top: 5rem;
  background: var(--white);
  width: 100%;

  .label-1 {
    margin: 0;
  }

  .internal-links {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      a {
        width: 100%;
        height: 3.313rem;
        padding: 1rem;
        display: flex;
        align-items: center;
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
      height: 3.313rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
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
        <li activeclassname="active">
          <Link to="/partner">Partner</Link>
        </li>
      </ul>
      <ul className="external-links">
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

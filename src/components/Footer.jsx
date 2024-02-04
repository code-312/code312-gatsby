import React from 'react'
import { Link } from 'gatsby'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'
import Button from './Button'
import styled from 'styled-components'
import longArrowAltRight from '../images/join-us/long-arrow-alt-right.svg'

const StyledFooter = styled.footer`
  padding: 1.5rem 0;
  display: block;
  margin: 0 auto;
  max-width: 45.5rem;

  .footer-content {
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1em;
  }

  .internal-links {
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;
    gap: 2rem;
    a {
      text-decoration: none;
      &:visited {
        color: var(--dark-blue);
      }
    }
  }

  .external-links {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  .social-img {
    min-width: 1.5rem;
  }

  .footer-text {
    text-align: center;
    color: var(--dark-grey);

    a {
      color: var(--dark-blue);
      text-decoration: none;
    }
  }

  @media (min-width: 648px) {
    padding: 2rem 3rem;

    .footer-content {
      gap: 1em;
    }
  }

  @media (min-width: 1200px) {
    padding: 3rem 0;

    .footer-content {
      width: 40.813rem;
    }
    .footer-links {
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-links">
          <ul className="internal-links p2-body">
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
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer

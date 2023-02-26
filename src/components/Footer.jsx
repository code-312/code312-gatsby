import React from 'react'
import { Link } from 'gatsby'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'
import meetup from '../images/meetup.svg'
import styled from 'styled-components'
import longArrowAltRight from '../images/join-us/long-arrow-alt-right.svg'

const StyledFooter = styled.footer`
  padding: 1.5rem 2rem;
  display: block;
  margin: 0 auto;

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

  .donate-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--white);
    border: 2px solid var(--dark-red);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
  }

  .internal-links {
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;
    gap: 2rem;
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
      gap: 3rem;
    }
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-links">
          <div className="donate-button-container">
            <a
              href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
              target="blank"
              rel="noopener noreferrer"
              className="button donateButton label-3"
            >
              Donate
            </a>

            <img src={longArrowAltRight} alt="" />
          </div>
          <ul className="internal-links p2-body">
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
        </div>
        <div className="footer-text">
          <p className="p3-body">
            <a
              href="https://codeforamerica.org/"
              target="_blank"
              rel="noreferrer"
            >
              Code for America Labs, Inc.
            </a>{' '}
            is a non-partisan, non-political 501(c)(3) charitable organization.
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer

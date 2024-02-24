import React from 'react'
import { Link } from 'gatsby'
import code312Logo from '../images/Code312_2024_Small.png'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'
import styled from 'styled-components'
import MobileNav from './MobileNav'
import Button from './Button'
import useWindow from '../hooks/useWindow'

const StyledNav = styled.nav`
  height: 6rem;
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      :visited {
        color: unset;
      }
    }
  }

  #logo-container {
    object-fit: contain;
    margin-right: 2rem;
  }

  .logo {
    display: block;
    height: auto;
    height: 4rem;
    /* min-width: 7.5rem; */
    object-fit: contain;

    @media (max-width: 576px) {
      min-width: 5.313rem;
    }
  }
  .slack-and-socials-container {
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

    .slack {
      margin-left: 1rem;
    }
  }
  .social-img {
    min-width: 1.875rem;
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
            <img className="logo" src={code312Logo} alt="Code 312" />
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
        <li activeclassname="active">
          <Link to="/partner">Partner</Link>
        </li>
      </ul>
      <div className="slack-and-socials-container">
        <ul className="external-links">
          <li className="social-logo">
            <a
              href="https://github.com/code-312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-img" src={githubLogo} alt="GitHub" />
            </a>
          </li>
          <li className="slack">
            <Button
              link="https://join.slack.com/t/code312/shared_invite/zt-2acnn36rl-kNFFP9E_NqxWORqHfBIO2w"
              text="Join our Slack"
              arrow
            />
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

export default Nav

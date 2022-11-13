import React from 'react'
import { Link } from 'gatsby'
import hamburgerOpenMenu from '../images/hamburger-open-menu.svg'
import brigadeLogo from '../images/cfc_logo_2021.svg'
import slackLogo from '../images/slack.svg'
import githubLogo from '../images/github.svg'
import meetup from '../images/meetup.svg'

const Nav = () => {
  return (
    <div>
      <nav class="navbar" aria-label="main">
        <button aria-label="open" onClick="toggleMenu()" class="menu-icon">
          <img src={hamburgerOpenMenu} alt="open menu" aria-hidden="true" />
        </button>
        <ul class="internal-links">
          <li id="logo-container">
            <Link to="/">
              <img
                class="brigade-logo"
                src={brigadeLogo}
                alt="Code For Chicago Logo"
              />
            </Link>
          </li>
          <li aria-current="page" class="hideable-int-link">
            <Link to="/projects">Projects</Link>
          </li>
          <li aria-current="page" class="hideable-int-link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li aria-current="page" class="hideable-int-link">
            <Link to="/join">Join Us</Link>
          </li>
          <li aria-current="page" class="hideable-int-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div class="donate-and-socials">
          <ul class="external-links">
            <li class="social-logo">
              <a
                href="https://www.meetup.com/code-for-chicago"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="social-img" src={meetup} alt="Meetup" />
              </a>
            </li>
            <li class="social-logo">
              <a
                href="https://code-for-chicago-slack-invite.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="social-img" src={slackLogo} alt="Slack" />
              </a>
            </li>
            <li class="social-logo">
              <a
                href="https://github.com/Code-For-Chicago/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="social-img" src={githubLogo} alt="GitHub" />
              </a>
            </li>
          </ul>
          <a
            href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
            target="blank"
            rel="noopener noreferrer"
            class="button donate-button"
          >
            Donate
          </a>
        </div>
      </nav>
      <nav aria-label="site" aria-expanded="false" class="mobile-nav">
        <ul></ul>
      </nav>
    </div>
  )
}

export default Nav

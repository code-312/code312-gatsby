import React, { useState } from 'react'
import styled from 'styled-components'
import mobileMenuClosed from '../images/mobile-menu-closed.svg'
import mobileMenuExpanded from '../images/mobile-menu-expanded.svg'
import CfCLogoMobile from '../images/cfc-logo-mobile.svg'
import brigadeLogo from '../images/cfc_logo_2021.svg'
import MobileNavExpanded from './MobileNavExpanded'
import { Link } from 'gatsby'

const StyledMobileNav = styled.nav`
  display: flex;
  flex-direction: column;

  .menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.438rem;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--light-grey);

    @media (min-width: 648px) {
      padding: 1.25rem 3rem;
    }
  }

  .hamburger-menu {
    cursor: pointer;
  }

  .donateButton {
    padding: 0.5rem 1rem;
    border: 2px solid var(--dark-red);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
    text-decoration: none;
    color: var(--blizzard-black);
  }

  .brigade-logo {
    display: block;
    height: auto;
    width: 7.404rem;
    height: 2.5rem;
  }
`

const MobileNav = ({ windowWidth }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMenuExpansion = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <StyledMobileNav>
      <div className="menu-top">
        <img
          src={isExpanded ? mobileMenuExpanded : mobileMenuClosed}
          alt="hamburger menu icon"
          onClick={handleMenuExpansion}
          className={isExpanded ? 'Close menu icon' : 'Expand menu icon'}
        />
        <Link to="/">
          <img
            src={windowWidth < 648 ? CfCLogoMobile : brigadeLogo}
            alt="CfC logo"
            className="brigade-logo"
          />
        </Link>
        <a
          href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
          target="blank"
          rel="noopener noreferrer"
          className="button donateButton label-3"
        >
          Donate
        </a>
      </div>
      {isExpanded && <MobileNavExpanded />}
    </StyledMobileNav>
  )
}

export default MobileNav

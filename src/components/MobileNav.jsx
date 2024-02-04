import React, { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'
import mobileMenuClosed from '../images/mobile-menu-closed.svg'
import mobileMenuExpanded from '../images/mobile-menu-expanded.svg'
import code312Logo from '../images/Code312_2024_Small.png'
import MobileNavExpanded from './MobileNavExpanded'
import { Link } from 'gatsby'

const StyledMobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--white);
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;

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

  .hambuger-button {
    background: transparent;
    border: none;
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

  .logo {
    display: block;
    height: auto;
    height: 3rem;
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
        <button className="hambuger-button" onClick={handleMenuExpansion}>
          <img
            src={isExpanded ? mobileMenuExpanded : mobileMenuClosed}
            alt="hamburger menu icon"
            className={isExpanded ? 'Close menu icon' : 'Expand menu icon'}
          />
        </button>
        <Link to="/">
          <img src={code312Logo} alt="Code 312" className="logo" />
        </Link>
        <Button
          text="Join our Slack"
          link="https://join.slack.com/t/code312/shared_invite/zt-2acnn36rl-kNFFP9E_NqxWORqHfBIO2w"
        />
      </div>
      {isExpanded && <MobileNavExpanded />}
    </StyledMobileNav>
  )
}

export default MobileNav

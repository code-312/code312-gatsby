import React, { useState } from 'react'
import styled from 'styled-components'
import mobileMenuClosed from '../images/mobile-menu-closed.svg'
import mobileMenuExpanded from '../images/mobile-menu-expanded.svg'
import CfCLogoMobile from '../images/cfc-logo-mobile.svg'
import MobileNavExpanded from './MobileNavExpanded'

const StyledMobileNav = styled.nav`
  .menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 3rem;
  }
`

const MobileNav = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMenuExpansion = () => {}
  return (
    <StyledMobileNav>
      <div className="menu-top">
        <img src={isExpanded ? mobileMenuExpanded : mobileMenuClosed} alt="" />
        <img src={CfCLogoMobile} alt="" />
        <a
          href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
          target="blank"
          rel="noopener noreferrer"
          className="button donateButton label-2"
        >
          Donate
        </a>
      </div>
      {isExpanded && <MobileNavExpanded />}
    </StyledMobileNav>
  )
}

export default MobileNav

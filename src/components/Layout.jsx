import React from 'react'
import { Link } from 'gatsby'
import Reset from '../styles/Reset'
import GlobalStyles from '../styles/GlobalStyles'
import Nav from './Nav'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: var(--cfa-red);
`

const StyledFooter = styled.footer`
  background: var(--cfa-red);
`

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <StyledHeader>
        <Nav />
      </StyledHeader>

      <main>{children}</main>
      <StyledFooter>
        <small className="copyright">
          &copy; {new Date().getFullYear()} Code for Chicago
        </small>
      </StyledFooter>
    </>
  )
}

export default Layout

import React from 'react'
import { Link } from 'gatsby'
import Reset from '../styles/Reset'
import GlobalStyles from '../styles/GlobalStyles'

import styled from 'styled-components'

const StyledHeader = styled.header`
  background: green;
`

const StyledFooter = styled.footer`
  background: green;
`

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <StyledHeader>
        <h1>
          <Link to="/">Code for Chicago</Link>
        </h1>
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

import React from 'react'
import { Link } from 'gatsby'
import Reset from '../styles/Reset'
import GlobalStyles from '../styles/GlobalStyles'
import Footer from './Footer'

import styled from 'styled-components'

const StyledHeader = styled.header`
  background: var(--cfa-red);
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
      <Footer/>
    </>
  )
}

export default Layout

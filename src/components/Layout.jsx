import React from 'react'
import { Link } from 'gatsby'
import Reset from '../styles/Reset'
import GlobalStyles from '../styles/GlobalStyles'
import Nav from './Nav'
import Footer from './Footer'
import styled from 'styled-components'

const StyledHeader = styled.header``

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <StyledHeader>
        <Nav />
      </StyledHeader>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout

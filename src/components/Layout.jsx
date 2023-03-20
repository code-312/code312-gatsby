import React from 'react'
import Reset from '../styles/Reset'
import GlobalStyles from '../styles/GlobalStyles'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout

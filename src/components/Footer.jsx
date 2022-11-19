import React from "react";
import styled from 'styled-components'
import logo from "../images/cfc_logo_short.svg"

const StyledFooter = styled.footer`
width: 14rem;
`
const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt="Code for Chicago Logo Icon"/>
      <p>
        <a href="https://codeforamerica.org/" target="_blank" rel="noreferrer">Code for America Labs, Inc.</a> is a non-partisan, non-political 501(c)(3) charitable organization</p>
    </StyledFooter>
  )
}

export default Footer
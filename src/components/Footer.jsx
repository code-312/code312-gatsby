import React from 'react'
import styled from 'styled-components'
import logo from '../images/cfc_logo_short.svg'

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
  display: block;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 0;
    }

    @media (min-width: 1200px) {
      padding: 0 6rem;
    }
  }

  .footer-logo {
    width: 4.75rem;
    height: auto;
  }

  .footer-right {
    text-align: center;

    @media (min-width: 768px) {
      text-align: right;
      max-width: 75%;
    }

    a {
      color: var(--cfa-blue-dark);
      text-decoration: none;
    }
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <img
          src={logo}
          alt="Code for Chicago Logo Icon"
          className="footer-logo"
        />
        <div className="footer-right">
          <p>
            <a
              href="https://codeforamerica.org/"
              target="_blank"
              rel="noreferrer"
            >
              Code for America Labs, Inc.
            </a>{' '}
            is a non-partisan, non-political 501(c)(3) charitable organization
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer

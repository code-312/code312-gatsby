import React from 'react'
import { Link } from 'gatsby'
import checkmark from '../images/join-us/checkmark.svg'
import longArrowAltRight from '../images/join-us/long-arrow-alt-right.svg'

const Checklist = () => {
  return (
    <section>
      <h3 className="heading-3">Ready To Join?</h3>
      <p className="p2-body">Complete the pre-onboarding checklist</p>
      <ul className="joinChecklist">
        <li>
          <img src={checkmark} alt="checkmark" className="joinCheckmark" />
          <Link to="/projects" target="_blank" className="label-2">
            Review our active projects
            <img src={longArrowAltRight} alt="arrow" />
          </Link>
        </li>
        <li>
          <img src={checkmark} alt="checkmark" className="joinCheckmark" />
          <a
            href="https://docs.google.com/presentation/d/1_7zd36CeHqi15DTqL3Wmh3dLCiN8EVbfW2iy1j-gs0M/edit#slide=id.g113339d9e72_0_56"
            target="_blank"
            rel="noreferrer"
            className="label-2"
          >
            Review &amp; agree to our code of conduct
            <img src={longArrowAltRight} alt="arrow" rel="noopener" />
          </a>
        </li>
        <li>
          <img src={checkmark} alt="checkmark" className="joinCheckmark" />
          <a
            href="https://join.slack.com/t/code312/shared_invite/zt-2acnn36rl-kNFFP9E_NqxWORqHfBIO2w"
            target="_blank"
            rel="noreferrer"
            className="label-2"
          >
            Join our Slack workspace
            <img src={longArrowAltRight} alt="arrow" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Checklist

import React from 'react'
import { Link } from 'gatsby'
import checkmark from '../images/join-us/checkmark.svg'
import longArrowAltRight from '../images/join-us/long-arrow-alt-right.svg'

const Checklist = () => {
  return (
    <section>
      <h3 class="joinHeader">Ready To Join?</h3>
      <p>Complete the pre-onboarding checklist</p>
      <ul class="joinChecklist">
        <li>
          <img src={checkmark} alt="checkmark" class="joinCheckmark" />
          <Link to="/projects" target="_blank">
            Review our active projects
            <img src={longArrowAltRight} alt="arrow" />
          </Link>
        </li>
        <li>
          <img src={checkmark} alt="checkmark" class="joinCheckmark" />
          <a
            href="https://docs.google.com/presentation/d/1_7zd36CeHqi15DTqL3Wmh3dLCiN8EVbfW2iy1j-gs0M/edit#slide=id.g113339d9e72_0_56"
            target="_blank"
            rel="noreferrer"
          >
            Review &amp; agree to our code of conduct
            <img src={longArrowAltRight} alt="arrow" rel="noopener" />
          </a>
        </li>
        <li>
          <img src={checkmark} alt="checkmark" class="joinCheckmark" />
          <a
            href="https://code-for-chicago-slack-invite.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
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

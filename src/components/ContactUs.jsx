import React, { useState } from 'react'
import ShortTextInput from './ShortTextInput'
import LongTextInput from './LongTextInput'
import Button from './Button'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--white);
  background-color: ${(props) =>
    props.bgBlue ? 'var(--blizzard-blue)' : 'var(--blizzard-white)'};

  padding: 0 3rem;

  h3 {
    text-align: center;
    padding-top: 4rem;
    color: var(--blizzard-black);

    @media (max-width: 640px) {
      padding-top: 3rem;
    }
  }

  .body-text {
    text-align: center;
    padding: 0 3rem;
    color: var(--blizzard-black);
    max-width: 37.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    align-items: center;
    margin: 0 auto;
    padding: 1.5rem 0 4rem;
    min-width: 37.5rem;
    @media (max-width: 640px) {
      min-width: 0;
      width: 100%;
      padding: 1.5rem 1.5rem 3rem;
    }
  }
`

const ContactUs = ({ bgBlue, copy }) => {
  const [info, setInfo] = useState({ email: '', message: '' })
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }
  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...info }),
    }).catch((error) => console.log(error))

    e.preventDefault()
  }

  return (
    <StyledSection bgBlue={bgBlue}>
      <h3 className="heading-1">Contact Us</h3>
      {copy && <p className="body-text">{copy}</p>}
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* You need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact-form" />
        <ShortTextInput
          type="email"
          label="Email"
          handleChange={handleChange}
          required
        />
        <LongTextInput handleChange={(e) => handleChange(e)} label="Message" />
        <Button text="Submit" center />
      </form>
    </StyledSection>
  )
}

export default ContactUs

import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 0 auto;
  width: min-content;
  color: var(--white);
  background-color: var(--blizzard-blue);
  h3 {
    text-align: center;
    font-size: 2.5rem;
    padding-top: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0 2rem 0 2rem;
    input,
    textarea {
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid var(--dark-grey);
      border-radius: 2.2px;
      background-color: var(--white);
      outline: none;
      resize: none;
      &.error {
        border: 2px solid var(--dark-red);
      }
    }
    label {
      font-weight: bold;
    }
    #message {
      height: 15rem;
      width: 37.5rem;
    }
    #email {
      height: 3.75rem;
      width: 37.5rem;
      &:hover,
      &:active {
        border: 2px solid var(--medium-blue);
      }
      &:focus {
        outline: 2px solid var(--medium-blue);
      }
      &:disabled {
        background-color: var(--white);
        border: none;
      }
    }
    button {
      margin: 1rem 0 3rem 0;
      padding: 1rem;
      justify-content: center;
      color: var(--white);
      background-color: transparent;
      border: 1px solid var(--white);
      border-radius: 2.2px;
      font-weight: bold;
      width: 37.5rem;
      cursor: pointer;
    }
  }
`

const ContactUs = () => (
  <StyledSection>
    <h3>Contact Us</h3>
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        maxLength={50}
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="message"
        maxLength={300}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </StyledSection>
)

export default ContactUs

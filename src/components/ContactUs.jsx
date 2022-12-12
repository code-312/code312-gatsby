import React from "react";
import styled from "styled-components";
// import Button from "../components/Button"

const StyledSection = styled.section`
h3 {}
form{
  input {
    &:hover{}
    &:active{}
    &.disabled {}
    &.error {}

  }
}
`;

const ContactUs = ()=>(
  <StyledSection>
    <h3>Contact Us</h3>
    <form>
      <label htmlFor="email">
        Email
      </label>
        <input type="email" name="email" id="email" placeholder="email"/>
      <label htmlFor="message">
        Message
      </label>
        <textarea name="message" id="message" placeholder="message"></textarea>
      <Button type="submit" text="submit &#8594;"/>
    </form>
  </StyledSection>
  
)

export default ContactUs

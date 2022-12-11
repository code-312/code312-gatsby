import React from "react";
import styled from "styled-components";

const StyledSection = styled.section``;

const ContactUs = ()=>(
  <StyledSection>
    <h3>Contact Us</h3>
    <form>
      <label htmlFor="email">
        Email
      </label>
        <input type="email" name="email" id="email" placeholder="Your email"/>
      <label htmlFor="message">
        Message
      </label>
        <textarea name="message" id="message" placeholder="Your message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </StyledSection>
  
)

export default ContactUs

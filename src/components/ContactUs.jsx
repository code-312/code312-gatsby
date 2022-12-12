import React from "react";
import styled from "styled-components";
// import Button from "../components/Button"

const StyledSection = styled.section`
h3 {
}
form{
  display: flex;
  flex-direction: column;
  input, textarea {
    box-sizing: border-box;
    padding: 1rem;
    border: 1px solid #606060;
    border-radius: 2.2px;
    background-color: #ffffff;
    outline: none;
    resize: none;
    &.error {
      border: 2px solid #D90000;
    }

  }
  #message{
    height: 240px;
    width: 600px;

    
  }
  #email{
    height: 60px;
    width: 250px;
    &:hover, &:active{
      border: 2px solid #4EB2E3;
    }
    &:focus {
      outline: 2px solid #4EB2E3;
    }
    &:disabled {
      background-color: #EFEFEF;
      border: none;
    }
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
        <input type="email" name="email" id="email" placeholder="email" maxLength={50}/>
      <label htmlFor="message">
        Message
      </label>
        <textarea name="message" id="message" placeholder="message" maxLength={300}></textarea>
      {/* <button type="submit">submit</button> will replace with Button component */}
    </form>
  </StyledSection>
  
)

export default ContactUs

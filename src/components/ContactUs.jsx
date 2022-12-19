import React from "react";
import styled from "styled-components";
// import Button from "../components/Button"

const StyledSection = styled.section`
margin: 0 auto;
width: min-content;
color: #ffffff;
background-color: #cf2045;
h3 {
  text-align: center;
  font-size: 2.5rem;
  padding-top: 2rem;
}
form{
  display: flex;
  flex-direction: column;
  margin: 0 2rem 0 2rem;
  input, textarea {
    margin: 1rem 0; 
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
  label {
    font-weight: bold;
  }
  #message{
    height: 240px;
    width: 600px;

    
  }
  #email{
    height: 60px;
    width: 600px;
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
  button {
    margin: 1rem 0 3rem 0;
    padding: 1rem;
    justify-content: center;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 2.2px;
    font-weight: bold;
    width: 600px;
    cursor: pointer;
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
      <button type="submit">Submit</button>
    </form>
  </StyledSection>
  
)

export default ContactUs

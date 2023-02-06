import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const StyledInput = styled.input`
    margin: 1rem 0; 
    padding: 0.5rem;
    border: 1px solid var(--dark-grey);
    border-radius: 2.2px;
    background-color: var(--white);
    outline: none;
    resize: none;
    
    &.error {
      border: 2px solid var(--error-red);
    }

    &:hover, &:active{
      border: 2px solid var(--button-outline-blue);
    }
    &:focus {
      outline: 2px solid var(--button-outline-blue);
    }
    &:disabled {
      background-color: var(--off-white);
      border: none;
    }
`


const ShortTextInput = ({ error, type, placeholder, handleChange }) => {
  return (
    <>
      {error ? 
        <p>{error}</p>
        :
        <StyledInput 
          type={type} 
          name={type} 
          id={type} 
          placeholder={placeholder} 
          maxLength={30}
          onChange={handleChange} />
      }
    </>
  )
}

export default ShortTextInput;

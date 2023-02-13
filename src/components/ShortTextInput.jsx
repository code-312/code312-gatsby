import React, {useState} from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const StyledShortTextInput = styled.section`
    width: 37.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1em 1em 2em 1em;

  div {
    width: 23rem;
    /* height: 15rem; */
    border: 1px solid var(--dark-grey);
    border-radius: 2.2px;
    padding: .2rem 1rem;
    /* margin: 1rem 1rem 2rem 1rem; */
  }
  div:active {
    border: 2px solid var(--button-outline-blue);
  }

  div:focus-within {
    border: 2px solid var(--button-outline-blue);
  }

  label {
    font-weight: 300;
    font-size: .8em;
    color: var(--light-grey);
    display: block;
    margin-bottom: .1rem;
  }
  
  input {
    margin-left: .1rem;
    border: none;
    resize: none;
    font-weight: 400;
    color: var(--tints-blizzard-black);
  }
  
  input:focus {
    outline: none;
  }
  
  span {
    width: 23rem;
    line-height: 1.3em;
    font-size: .8em;
    font-weight: 100;
    color: var(--light-grey);
    margin-left: .2rem;
  }
`

const ShortTextInput = ({ type, label, error, helper }) => {
  const [text, setText] = useState('')
  const [errorMsg, toggleErrorMsg]= useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const throwError = () => {
    toggleErrorMsg(true)
  }

  return (
    <StyledShortTextInput>
      <div       
      style={ errorMsg ? { borderColor: 'var(--error-red)' }
      : {borderColor: 'var(--button-outline-blue)}'}
    }>
        <label for="short-text-input">{label}</label>
        <input
          name="short-text-input"
          id="short-text-input"
          value={text}
          onChange={handleChange}
          type={type}
          onInvalid={throwError}
          />
      </div>
        <span style={errorMsg ? {color: 'var(--dark-red)'}: {color: 'var(--light-grey)'}}>
          {errorMsg ? error : helper}
        </span>
    </StyledShortTextInput>
  )
}
export default ShortTextInput;

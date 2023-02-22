import React, {useState} from 'react'
import styled from "styled-components"

const StyledShortTextInput = styled.section`
  width: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 1em 0; */
    
  div {
    width: 23rem;
    border: 1px solid var(--dark-grey);
    border-radius: 2.2px;
    padding: .1rem .5rem;
  }
  
  
  div:active {
    border: 2px solid var(--button-outline-blue);
  } 
  
  div:focus-within {
    border: 2px solid var(--medium-blue);
  }
  
  label {
    font-weight: 300;
    font-size: .8em;
    color: var(--dark-grey);
    display: block;
  }
  
  input {
    width: 21rem;
    border: none;
    resize: none;
    font-weight: 400;
    color: var(--tints-blizzard-black);
    margin: 0 0 .2rem .2rem;
  }
  
  input:focus, input:active {
    outline: none;
  }
  
  span {
    width: 23rem;
    height: 2.5em;
    font-size: .8em;
    font-weight: 100;
    color: var(--dark-grey);
  }
  
  .errorBorder {
  border: 2px solid red;
  }

  .errorText {
    color: red;
  }
  `

const ShortTextInput = ({ type, label, error, helper, required }) => {
  const [text, setText] = useState('')
  const [errorMsg, toggleErrorMsg]= useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const throwError = () => {
    toggleErrorMsg(true)
  }

  const resetError = () => {
    if (errorMsg) {toggleErrorMsg(true)}
  }

  return (
    <StyledShortTextInput>
      <div onClick={resetError} className={errorMsg ? "errorBorder" : null}>
        <label for="short-text-input">{label}</label>
        <input
          name="short-text-input"
          id="short-text-input"
          value={text}
          onChange={handleChange}
          type={type}
          required={required}
          onInvalid={throwError}
          />
      </div>
        <span className={errorMsg ? "errorText" : null}>
          {errorMsg ? error : helper ? helper : undefined}
        </span>
    </StyledShortTextInput>
  )
}
export default ShortTextInput;

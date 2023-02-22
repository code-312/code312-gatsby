import React, {useState} from 'react'
import styled from "styled-components"

const StyledShortTextInput = styled.section`
    width: 23rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1em 1em 2em 1em;
    
    div {
    width: 23rem;
    border: 1px solid var(--dark-grey);
    border-radius: 2.2px;
    padding: .1rem .5rem;
  }
  
  .error {
  border: 2px solid var(--error-red);
  color: var(--error-red);
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
    margin-bottom: .1rem;
  }
  
  input {
    margin-left: .1rem;
    border: none;
    resize: none;
    font-weight: 400;
    color: var(--tints-blizzard-black);
  }
  
  input:focus, input:active {
    outline: none;
  }
  
  span {
    width: 23rem;
    line-height: 1.3em;
    font-size: .8em;
    font-weight: 100;
    color: var(--dark-grey);
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
      <div className={errorMsg ? error : null}>
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
        <span className={errorMsg ? error: null}>
          {errorMsg ? error : helper ? helper : undefined}
        </span>
    </StyledShortTextInput>
  )
}
export default ShortTextInput;

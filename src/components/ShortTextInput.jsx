import React, { useState } from 'react'
import styled from 'styled-components'

const StyledShortTextInput = styled.section`
  width: 21.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  div {
  }

  label:active {
    border: 2px solid var(--button-outline-blue);
  }

  label:focus-within {
    border: 2px solid var(--medium-blue);
  }

  

  label {
    width: 21.6875rem;
    height: 3.6875rem;
    border: 1px solid var(--dark-grey);
    border-radius: 2.2px;
    padding: 0.1rem 0.5rem;
    font-weight: 300;
    font-size: 0.875rem;
    color: var(--dark-grey);
    display: block;
  }

  input {
    display: block;
    border: none;
    resize: none;
    font-weight: 400;
    color: var(--tints-blizzard-black);
    margin: 0 0 0.2rem 0;
  }

  input:focus,
  input:active {
    outline: none;
  }

  span {
    width: 21.6875rem;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 100;
    color: var(--dark-grey);
  }

  .errorBorder {
    border: 2px solid red;
  }

  .errorText {
    color: red;
    font-size: 1rem;
  }
`

const ShortTextInput = ({ type, label, error, helper, required }) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <StyledShortTextInput>
      <label className={error ? 'errorBorder' : null}>
        {label}
        <input
          name="short-text-input"
          id="short-text-input"
          value={text}
          onChange={handleChange}
          type={type}
          required={required}
        />
      </label>
      {helper || error ? (
        <span className={error ? 'errorText' : null}>
          {error ? error : helper}
        </span>
      ) : undefined}
    </StyledShortTextInput>
  )
}
export default ShortTextInput

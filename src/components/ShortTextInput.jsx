import React, { useState } from 'react'
import styled from 'styled-components'

const StyledShortTextInput = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--white);
  width: 100%;

  label:active {
    border: 2px solid var(--medium-blue);
    color: var(--dark-blue);
  }

  label:focus-within {
    outline: 2px solid var(--medium-blue);
  }

  label:hover {
    border: 2px solid var(--medium-blue);
  }

  .disabled {
    border: none;
    outline: none;
    background-color: var(--light-grey);
    pointer-events: none;
  }

  label {
    height: 3.6875rem;
    border: 1px solid var(--dark-grey);
    border-radius: 2.2px;
    padding: 0.1rem 0.5rem;
    color: var(--dark-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    height: 0;
    display: block;
    border: none;
    resize: none;
    font-weight: 400;
    color: var(--blizzard-black);
    margin: 0 0 0.2rem 0;
    transition-property: height;
    transition-duration: 200ms;
  }

  input:focus,
  input:active,
  .active-height {
    outline: none;
    height: 1.5rem;
  }

  span {
    width: 21.6875rem;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 100;
    color: var(--dark-grey);
  }

  .error-border {
    border: 2px solid red;
  }

  .error-text {
    color: red;
    font-size: 1rem;
  }
`

const ShortTextInput = ({ type, label, error, helper, required, disabled }) => {
  const [text, setText] = useState('')
  const [focus, setFocus] = useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const focusToggle = () => {
    if (!disabled) {
      setFocus(!focus)
    }
  }

  return (
    <StyledShortTextInput>
      <label
        className={
          (text || focus ? 'p3-body' : 'p2-body') +
          ' ' +
          (error ? 'error-border' : '') +
          ' ' +
          (disabled ? 'disabled' : '')
        }
        onFocus={focusToggle}
        onBlur={focusToggle}
      >
        {label}
        <input
          disabled={disabled ? true : false}
          name="short-text-input"
          id="short-text-input"
          value={text}
          onChange={handleChange}
          type={type}
          required={required}
          className={text ? 'active-height' : null}
        />
      </label>
      {(helper || error) && (
        <span className={error ? 'error-text' : null}>
          {error ? error : helper}
        </span>
      )}
    </StyledShortTextInput>
  )
}
export default ShortTextInput

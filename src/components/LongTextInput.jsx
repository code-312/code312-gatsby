import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const StyledLongTextInput = styled.section`
  width: 100%;
  height: 15rem;
  border: 1px solid var(--dark-grey);
  background: var(--white);
  border-radius: 2.2px;
  display: flex;
  flex-direction: column;
  padding: 1.063rem 1rem;

  :active {
    border: 2px solid var(--medium-blue);
  }

  :focus-within {
    border: 2px solid var(--medium-blue);
  }

  label {
    color: var(--dark-grey);
  }

  textarea {
    flex: 1;
    border: none;
    resize: none;
    color: var(--blizzard-black);
  }

  textarea:focus {
    outline: none;
  }

  span {
    display: block;
    margin-left: auto;
    color: var(--dark-grey);
  }

  .max-character {
    color: var(--dark-red);
  }
`

const LongTextInput = ({ maxCharacterCount = 300 }) => {
  const [text, setText] = useState('')
  const [characterCount, setCharacterCount] = useState(0)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    if (text === '') {
      setCharacterCount(0)
    } else {
      const newCharacterCount = text.split('').length
      setCharacterCount(newCharacterCount)
    }
  }, [text])

  return (
    <StyledLongTextInput
      style={
        characterCount > maxCharacterCount
          ? { borderColor: 'var(--dark-red)' }
          : null
      }
    >
      <label htmlFor="long-text-input p2-body">Message</label>
      <textarea
        name="long-text-input"
        id="long-text-input"
        value={text}
        onChange={handleChange}
      />
      <span
        className={`${characterCount} > ${maxCharacterCount} ? 'max-character p3-body' : 'p3-body'`}
      >
        {`${characterCount}/${maxCharacterCount} ${
          characterCount < 2 ? 'character' : 'characters'
        }`}
      </span>
    </StyledLongTextInput>
  )
}

export default LongTextInput

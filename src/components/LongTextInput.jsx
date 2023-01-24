import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const StyledLongTextInput = styled.section`
  width: 37.5rem;
  height: 15rem;
  border: 1px solid var(--dark-grey);
  border-radius: 2.2px;
  display: flex;
  flex-direction: column;
  padding: 1.063rem 1rem;

  label {
    font-weight: 400;
    color: var(--dark-grey);
  }

  textarea {
    flex: 1;
    border: none;
    resize: none;
    font-weight: 400;
    color: var(--tints-blizzard-black);
  }

  span {
    display: block;
    margin-left: auto;
    font-weight: 400;
    color: var(--dark-grey);
  }

  .max-word {
    color: var(--dark-red);
  }
`

const LongTextInput = () => {
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [maxWordCount, setMaxWordCount] = useState(300)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    if (text === '') {
      setWordCount(0)
    } else {
      const newWordCount = text.split(' ').length
      setWordCount(newWordCount)
    }
  }, [text])

  return (
    <StyledLongTextInput>
      <label for="long-text-input">Message</label>
      <textarea
        name="long-text-input"
        id="long-text-input"
        value={text}
        onChange={handleChange}
      />
      <span
        className={wordCount > maxWordCount ? 'max-word' : ''}
      >{`${wordCount}/${maxWordCount} words`}</span>
    </StyledLongTextInput>
  )
}

export default LongTextInput
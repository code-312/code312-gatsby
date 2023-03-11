import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButton = styled.div`
  /* sample styling, will get overwritten to match figma template */
  a,
  button {
    text-decoration: none;
    outline: none;
    color: #001426;
    cursor: pointer;
  }
  .primary {
    background-color: red;
    border: 2px solid black;
    width: 6.5rem;
    height: 2.4rem;
  }
  .secondary {
    background-color: green;
    width: 8rem;
  }
  .textBtn {
  }
  .small {
    width: 4rem;
    height: 2rem;
  }
`

const Button = ({ text, link, secondary, textBtn, small, handleClick }) => {
  let className = ['primary']
  if (secondary) className = ['secondary']
  if (textBtn) className = ['textBtn']
  if (small) className.push('small')
  className = className.join(' ')

  return (
    <StyledButton>
      {link ? (
        link[0] !== '/' ? (
          <a
            className={className}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        ) : (
          <Link to={link} className={className}>
            {text}
          </Link>
        )
      ) : (
        <button className={`${className} label-3`} onClick={handleClick}>
          {text}
        </button>
      )}
    </StyledButton>
  )
}

export default Button

// instructions for use as a component:

// <Button text={text} /> This will return primary button

// you can add attr to further specify type and size such as

//   <Button text = { text } secondary small />

//   available attr for buttons are: secondary, textBtn
//   available attr for size are: small

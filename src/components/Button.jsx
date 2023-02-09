import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"

const StyledButton = styled.div`
  /* sample styling, will get overwritten to match figma template */
  a,
  button {
    text-decoration: none;
    outline: none;
    color: #001426;
    cursor: pointer;
    margin-left: 13px;
  }
  .primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--white);
    border: 2px solid var(--error-red);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
  }
  .secondary {
    background-color: green;
    width: 8rem;
  }
  .textBtn {
  }
  .small {
    width: 6rem;
    height: 2rem;
  }
`

const Button = ({ text, link, secondary, textBtn, small, handleClick }) => {
  let className = ['primary']
  if (secondary) className = ['secondary']
  if (textBtn) className = ['textBtn']
  if (small) className.push('small')
  className = className.join(' ');
    
  return (
    < StyledButton >
       {link ? (
        link[0] !== '/' ? (
          <a className={className} href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          <Link to={link} className={className}>
            {text}
          </Link>
        )
      ) : (
        <button className={className} onClick={handleClick}>
            {text}
        </button>
      )}
    </StyledButton>
  ) 
}

export default Button;

// instructions for use as a component:

// <Button text={text} /> This will return primary button

// you can add attr to further specify type and size such as

//   <Button text = { text } secondary small />

//   available attr for buttons are: secondary, textBtn
//   available attr for size are: small
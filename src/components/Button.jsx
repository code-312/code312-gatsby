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
    margin-bottom: 22px;
  }
  .primary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.3rem;
    /* position: absolute; */
    width: 7rem;
    height: 2.3rem;
    left: 1rem;
    top: 6rem;
    background: var(--white);
    border: 3px solid var(--error-red);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
  }
  .primary:hover {
    color: var(--white);
    /* position: absolute; */
    height: 34px;
    left: 9rem;
    background: var(--error-red);
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.6);
  }
  /* .primary:focus {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    padding: .13rem;
    gap: 0.25rem;
    position: absolute;
    width: 7rem;
    height: 3rem;
    left: 27rem;
    top: 100px;
    border: 2px solid #4eb2e3;
    border-radius: 2.2px; 
  } */
  .primary:disabled {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 4px;

    position: absolute;
    width: 103.21px;
    height: 37px;
    left: 570px;
    top: 102px;
    background: #efefef;
    border-radius: 2.2px;
  }
  .primarysmall {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    /* position: absolute; */
    width: 6rem;
    height: 2rem;
    left: 1rem;
    top: 2rem;
    gap: 0.25rem;
    background-color: var(--white);
    border: 3px solid var(--error-red);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
  }
  .primarysmall:hover {
    color: var(--white);
    left: 9rem;
    background: #d90000;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.6);
  }
  .primarysmall:active {
    left: 17rem;
  }
  /* .primarysmall:focus {
  } */
  .secondary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.6rem;
    /* position: absolute; */
    width: 5rem;
    height: 2rem;
    left: 1rem;
    top: 15rem;
    background: var(--white);
    border: 2px solid var(--blizzard-blue);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
  }
  .secondarysmall {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.6rem;
    /* position: absolute; */
    width: 4.6rem;
    height: 2rem;
    left: 1rem;
    top: 11rem;
    background: var(--white);
    border: 2px solid var(--blizzard-blue);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
  }
  .textBtn {
    width: 8.5rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 0.5rem;
    border: none;
    color: var(--error-red);
  }
`

const Button = ({ text, link, secondary, textBtn, small, handleClick }) => {
  let className = ['primary']
  if (secondary) className = ['secondary']
  if (textBtn) className = ['textBtn']
  if (small) className.push('small')
  className = className.join('');
    
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
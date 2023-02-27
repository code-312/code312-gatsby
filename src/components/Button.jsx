import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaLongArrowAltRight } from 'react-icons/fa'
import textArrow from '../images/text-button-arrow.svg'

const StyledButton = styled.div`
  /* sample styling, will get overwritten to match figma template */
  a,
  button {
    text-decoration: none;
    outline: none;
    color: var(--blizzard-black);
    cursor: pointer;
    svg {
      padding-left: 0.25rem;
    }
  }
  .primary {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 7rem;
    height: 2.3rem;
    background: var(--white);
    border: 3px solid var(--dark-red);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
    &.small {
      width: 6rem;
      height: 2rem;
    }
    svg {
      fill: red;
    }
  }
  .primary,
  .primary.small {
    &:hover {
      color: var(--white);
      background: var(--dark-red);
      box-shadow: 2px 3px 4px var(--shadow-black);
      border-radius: 2.2px;
      svg {
        fill: var(--white);
      }
    }
    &:active {
      background: var(--darker-red);
      box-shadow: none;
    }
    &:focus {
      border: 2px solid var(--white);
      outline: 2px solid var(--medium-blue);
      border-radius: 2.2px;
    }
    &:disabled {
      color: var(--dark-grey);
      background: var(--light-grey);
      border: none;
      box-shadow: none;
      svg {
        fill:var(--dark-grey)
      }
    }
  }
  .secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 5rem;
    height: 2rem;
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
    width: 4.6rem;
    height: 2rem;
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

const Button = ({
  text,
  link,
  secondary,
  textBtn,
  small,
  handleClick,
  arrow,
}) => {
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
            {arrow && <img src={arrowImage} alt="right arrow" />}
          </a>
        ) : (
          <Link to={link} className={className}>
            {text}
            {arrow && <img src={arrowImage} alt="right arrow" />}
          </Link>
        )
      ) : (
        <button className={className} onClick={handleClick} >
          {text}
          {arrow && <FaLongArrowAltRight alt="right arrow" />} 
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

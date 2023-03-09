import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaLongArrowAltRight } from 'react-icons/fa'
import textArrow from '../images/text-button-arrow.svg'
const StyledButton = styled.div`
  a,
  button {
    text-decoration: none;
    outline: none;
    color: var(--blizzard-black);
    cursor: pointer;
    svg {
      margin-right: -0.25rem;
      padding: 0.12rem;
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
      background: var(--dark-red);
      color: var(--white);
      svg {
        fill: var(--white);
      }
    }
    &:disabled {
      color: var(--dark-grey);
      background: var(--light-grey);
      border: none;
      box-shadow: none;
      svg {
        fill: var(--dark-grey);
      }
    }
  }
  .secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 5rem;
    height: 2.31rem;
    background: var(--white);
    border: 2px solid var(--blizzard-blue);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.2px;
    &.small {
      width: 4.63rem;
      height: 2.13rem;
    }
  }
  .secondary,
  .secondary.small {
    &:hover {
      box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.6);
    }
    &:active {
      background: var(--blizzard-blue);
      box-shadow: none;
    }
    &:focus {
      background: var(--white);
      border: 1.5px solid var(--white);
      border-radius: 3.3px;
      outline: 2px solid var(--medium-blue);
      box-shadow: inset 0 0 3px var(--medium-blue);
    }
    &:disabled {
      border: 2px solid var(--light-grey);
      color: var(--dark-grey);
    }
  }
  .textBtn {
    width: 8.5rem;
    height: 1.31rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    border: none;
    color: var(--dark-red);
    border-radius: 2.2px;
    background: none;
    text-decoration: none;
    &.small {
      height: 1.12rem;
      width: 5.75rem;
    }
  }
  .textBtn,
  .textBtn.small {
    &:active {
      color: var(--dark-red);
      img {
        display: none;
      }
    }
    &:focus {
      border: 2px solid var(--medium-blue);
      border-radius: 2.2px;
    }
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
  const [isDisabled, setIsDisabled] = useState(false)

  let className = ['primary']
  if (secondary) className = ['secondary']
  if (textBtn) className = ['textBtn']
  if (small) className.push('small')
  className = className.join(' ')

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
            {arrow && <img src={textArrow} alt="right arrow" />}
          </a>
        ) : (
          <Link to={link} className={className}>
            {text}
            {arrow && <img src={textArrow} alt="right arrow" />}
          </Link>
        )
      ) : (
        <button
          className={className}
          onClick={handleClick}
          disabled={isDisabled}
        >
          {text}
          {arrow && <FaLongArrowAltRight alt="right arrow" />}
        </button>
      )}
    </StyledButton>
  )
  )
}

export default Button

// instructions for use as a component:

// <Button text={text} /> This will return primary button

// you can add attr to further specify type and size such as

//   <Button text = { text } secondary small />

//   available attr for buttons are: secondary, textBtn
//   available attr for size are: small

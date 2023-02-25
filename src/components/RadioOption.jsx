import React from 'react'
import styled from 'styled-components'

const StyledRadioOption = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #606060;
  border-radius: 5px;
  gap: 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 60px;
  width: 250px;
  padding-left: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: #001426;
  background: #fff;

  /* input[type='radio']:after {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #fff;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #000;
  } */

  :hover {
    border: 1px solid #4eb2e3;
    color: #4eb2e3;

    /* input[type='radio']:before {
      border-color: green;
    } */
  }
`

const RadioOption = ({ optionLabel }) => {
  return (
    <StyledRadioOption>
      <input type="radio" />
      <label htmlFor={optionLabel}>{optionLabel}</label>
    </StyledRadioOption>
  )
}

export default RadioOption

import React from 'react'
import styled from 'styled-components'

const StyledRadioOption = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  display: flex;
  align-items: center;
  border: 1px solid var(--dark-grey);
  border-radius: 2.2px;
  gap: 1rem;
  height: 3.75rem;
  width: 15.625rem;
  padding-left: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.25rem;
  /* color: var(--blizzard-black); */
  background: var(--white);

  input[type='radio'] {
    display: grid;
    place-content: center;
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: var(--white);
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: var(--blizzard-black);
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--blizzard-black);
    border-radius: 50%;
    transform: translateY(-0.5px);

    :before {
      content: '';
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1rem 1rem var(--blizzard-black);

      /* Windows High Contrast Mode */
      background-color: CanvasText;
    }

    :checked::before {
      transform: scale(1);
    }
  }

  .form-control {
    display: grid;
  }

  :hover {
    border: 1px solid #4eb2e3;
    color: #4eb2e3;
  }
`

const StyledSampleRadioButtons = styled.div`
  display: flex;
  gap: 1rem;
`

export const SampleRadioButtons = ({ optionLabel }) => {
  return (
    <StyledSampleRadioButtons>
      <RadioOption optionLabel="Sample Option" />
      <RadioOption optionLabel="Sample Option" />
    </StyledSampleRadioButtons>
  )
}

const RadioOption = ({ optionLabel }) => {
  return (
    <StyledRadioOption>
      <input type="radio" name="radio" />
      <label className="form-control" htmlFor={optionLabel}>
        {optionLabel}
      </label>
    </StyledRadioOption>
  )
}

export default RadioOption

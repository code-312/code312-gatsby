import React from 'react'
import styled from 'styled-components'

const StyledRadioOption = styled.input``

const RadioOption = ({ optionLabel }) => {
  return (
    <>
      <StyledRadioOption type="radio" />
      <label htmlFor={optionLabel}>{optionLabel}</label>
    </>
  )
}

export default RadioOption

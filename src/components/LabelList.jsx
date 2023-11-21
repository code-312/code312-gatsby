import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLabelList = styled.span`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: flex-start;
    padding: 0 1rem 1rem;
    gap: 0.5rem;
  

  .label-areas {
    background-color: var(--light-grey);
    padding: 0.25rem;
    border-radius: 0.1375rem;
    white-space: nowrap;
    flex-grow: 0;
  }
`
const LabelList = ({
  labels,
}) => {
  return (
    <StyledLabelList>
      {labels.map((label, i)=>{
        <span key={i} className="label-areas label-3">
          {label}
        </span>
      })}
    </StyledLabelList>
  )
}

export default LabelList

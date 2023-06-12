import React, { useState } from 'react'
import styled from 'styled-components'

const StyledRadioOption = styled.div`
  cursor: pointer;

  .button-container {
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
    background: var(--white);
    cursor: pointer;

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
      cursor: pointer;

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
      border: 1px solid var(--medium-blue);
      color: var(--medium-blue);

      input[type='radio'] {
        border: 1px solid var(--medium-blue);

        :before {
          box-shadow: inset 1rem 1rem var(--medium-blue);
        }
      }
    }

    :active {
      border: 1px solid var(--dark-blue);
      color: var(--white);
      background: var(--dark-blue);

      input[type='radio'] {
        border: 1px solid var(--white);

        :before {
          box-shadow: inset 1rem 1rem var(--white);
        }
      }
    }
  }

  .selected {
    border: 1px solid var(--dark-blue);
    color: var(--white);
    background: var(--dark-blue);

    input[type='radio'] {
      border: 1px solid var(--white);

      :before {
        box-shadow: inset 1rem 1rem var(--white);
      }
    }
  }

  .error {
    border: 1px solid var(--dark-red);
    color: var(--dark-red);
    background: var(--white);

    input[type='radio'] {
      border: 1px solid var(--dark-red);

      :before {
        box-shadow: inset 1rem 1rem var(--dark-red);
      }
    }
  }

  .disabled {
    cursor: not-allowed;
    pointer-events: none;
    border: 1px solid var(--dark-grey);
    color: var(--dark-grey);
    background: var(--light-grey);

    input[type='radio'] {
      border: 1px solid var(--dark-grey);
    }
  }
  .error-text {
    color: var(--dark-red);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding-top: 0.5rem;
  }
`

const RadioOption = ({ optionLabel, disabled, error }) => {
  let className = ['button-container']
  if (disabled) className.push('disabled')
  if (error) className.push('error')
  className = className.join(' ')
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <StyledRadioOption>
      <div className={className} onChange={handleActive}>
        <input type="radio" name="radio" checked={active === true} />
        <label className="form-control" htmlFor={optionLabel}>
          {optionLabel}
        </label>
      </div>
      {error && <p className="error-text">Please choose only one option.</p>}
    </StyledRadioOption>
  )
}

export default RadioOption

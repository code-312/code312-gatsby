import { createGlobalStyle } from 'styled-components'
import '@fontsource/source-sans-pro'

const GlobalStyles = createGlobalStyle`
  :root {
    // Branding colors
    // Primary
    --blizzard-blue: #b3ddf2;
    --medium-blue: #4eb2e3;
    --dark-blue: #0075B8;
    --red: #fe0400;
    --dark-red: #d90000;
    --darker-red: #b90000;
  
    // Secondary
    --dark-purple: #800080;

    // Colors outside of design system
    --light-grey: #efefef; 
    --dark-grey: #606060; 
    --blizzard-black: #001426;
    --shadow-black:#00000099;
    --black: #333333;
    --white: #fff;
    
    // Font
    font-family: 'Source Sans Pro', sans-serif;

    // Inline Hyperlinks
    a {
      color: var(--dark-blue);
      font-weight: 400;
      text-decoration: underline;
    }

    a:hover {
      color: var(--dark-red);
    }

    a:active {
      color: var(--dark-blue);
      text-decoration: none;
    }

    a:focus {
      border: 2px solid var(--dark-blue);
      text-decoration: none;
    }

    a:visited {
      color: var(--dark-purple);
      text-decoration: none;
    }

    a[aria-disabled="true"] {
      color: var(--blizzard-black);
      text-decoration: none;
      pointer-events: none;
    }
  }

  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  .heading-1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.625rem;

    @media (min-width: 40.5rem) {
      font-size: 2.625rem;
      line-height: 3.438rem;
    }
  }
  .heading-2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.9375rem;

    @media (min-width: 40.5rem) {
      font-size: 2rem;
      line-height: 2.625rem;
    }
  }
  .heading-3 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.438rem;

    @media (min-width: 40.5rem) {
      font-size: 1.5rem;
      line-height: 1.938rem;
    }
  }
  .heading-4 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.313rem;

    @media (min-width: 40.5rem) {
      font-size: 1.125rem;
      line-height: 1.438rem;
    }
  }
  .heading-5 {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.125rem;

    @media (min-width: 40.5rem) {
      font-size: 1rem;
      line-height: 1.313rem;
    }
  }
  .heading-6 {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;

    @media (min-width: 40.5rem) {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
  .eyebrow-1 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.313rem;

    @media (min-width: 40.5rem) {
      font-size: 1.125rem;
      line-height: 1.438rem;
    }
  }
  .eyebrow-2 {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;

    @media (min-width: 40.5rem) {
      font-size: 1rem;
      line-height: 1.313rem;
    }
  }
  .eyebrow-3 {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;

    @media (min-width: 40.5rem) {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
  
  .p1-strong {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (min-width: 40.5rem) {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
  .p1-body {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (min-width: 40.5rem) {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
  
  .p2-body {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.313rem;

    @media (min-width: 40.5rem) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  .p3-body {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;

    @media (min-width: 40.5rem) {
      font-size: 0.875rem;
      line-height: 1.313rem;
    }
  }
  .label-1 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.313rem;

    @media (min-width: 40.5rem) {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
  .label-2 {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;

    @media (min-width: 40.5rem) {
      font-size: 1rem;
      line-height: 1.313rem;
    }
  }
  .label-3 {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;

    @media (min-width: 40.5rem) {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
  .quote {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.875rem;

    @media (min-width: 40.5rem) {
      font-size: 1.75rem;
      line-height: 2.625rem;
    }
  }


`

export default GlobalStyles

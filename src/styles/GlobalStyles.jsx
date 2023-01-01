import { createGlobalStyle } from 'styled-components'
import '@fontsource/source-sans-pro'

const GlobalStyles = createGlobalStyle`
  :root {
    // Branding colors

    // Primary
    --cfa-red: #cf2045;
    --cfa-red-dark: #aa1a37;
    --cfa-blue: #359ed3;
    --cfa-blue-dark: #0d77ac;
    --cfa-hero-bg: #b3ddf2;

    // Secondary
    --light-grey: #bababa;
    --dark-grey: #606060; /* this is not used anywhere */
    --off-white: #f5f5f5;
    --tints-blizzard-black: #001426;
    --error-red: #D90000;
    --button-outline-blue: #4EB2E3;

    --gray-600: #6c757d;
    --black: #333333;
    --white: #fff;
    
    // Font
    font-family: 'Source Sans Pro', sans-serif;
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
`

export default GlobalStyles

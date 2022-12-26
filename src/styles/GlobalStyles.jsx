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

    // Secondary
    --light-grey: #bababa;
    --dark-grey: #606060; /* this is not used anywhere */
    --off-white: #f5f5f5;
    --nav-background-color: white;
    --nav-internal-links-color: #333333;

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

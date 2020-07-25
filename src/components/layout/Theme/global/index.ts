import { createGlobalStyle } from 'styled-components'
import colors from '../colors'

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.mainBg};
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`
export default Global

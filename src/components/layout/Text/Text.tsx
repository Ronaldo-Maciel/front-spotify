import styled from 'styled-components'
import Props from './types'
import sizes from '../Theme/sizes/sizes'
import colors from '../Theme/colors'

const Text = styled.h1<Props>(({ variant = 'h1', textColor = colors.primary, textWeight = 'normal' }) => `
  font-size: ${sizes.font[variant]}rem;
  font-family: 'Roboto', sans-serif;
  color: ${textColor};
  font-weight: ${textWeight};
  margin: 1.2px 0;
`)

export default Text

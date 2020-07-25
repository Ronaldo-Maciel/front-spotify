import styled from 'styled-components'
import colors from '../../Theme/colors/colors'
import sizes from '../../Theme/sizes/sizes'

const TextFieldStyle = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: solid 1px ${colors.primary};
  color: ${colors.primary};
  font-family: 'Roboto', sans-serif;
  font-size: ${sizes.font.h2}rem;
  font-weight: bold;
  margin-top: 6px;
  margin-bottom: 14px;
  padding: 0.8rem 0.4rem;
  width: 100%;

  ::placeholder {
    color: ${colors.primary};
  }
`

export default TextFieldStyle

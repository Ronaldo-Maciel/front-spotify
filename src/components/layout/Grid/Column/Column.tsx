import styled from 'styled-components'
import sizes from '../../Theme/sizes/sizes'
import getWidthGrid from '../helpers'
import Props from './types'

const Column = styled.div<Props>`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media(min-width: ${sizes.media.sm}px) {
    ${({ sm }): string => sm && `flex: 0 0 ${getWidthGrid(sm)}%;`}
  }
  @media(min-width: ${sizes.media.md}px) {
    ${({ md }): string => md && `flex: 0 0 ${getWidthGrid(md)}%`}
  }
  @media(min-width: ${sizes.media.lg}px) {
    ${({ lg }): string => lg && `flex: 0 0 ${getWidthGrid(lg)}%`}
  }
  @media(min-width: ${sizes.media.xl}px) {
    ${({ xl }): string => xl && `flex: 0 0 ${getWidthGrid(xl)}%`}
  }
`
export default Column

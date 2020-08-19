import styled from 'styled-components'
import sizes from '../../layout/Theme/sizes/sizes'

const GridContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media(min-width: ${sizes.media.sm}px) {
    width: 540px;
  }
  @media(min-width: ${sizes.media.md}px) {
    width: 720px;
  }
  @media(min-width: ${sizes.media.lg}px) {
    width: 960px;
  }
  @media(min-width: ${sizes.media.xl}px) {
    width: 1140px;
  }
`
export default GridContainer

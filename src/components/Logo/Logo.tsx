import React from 'react'
import LogoContainer from './style'
import logo from '../../assets/icons/logo.svg'

function Logo(): JSX.Element {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo Spotify" title="Spotify" />
    </LogoContainer>
  )
}

export default Logo

import * as React from 'react'
import HeaderProps from './types'
import HeaderContent from './style'

function Header({ children }: HeaderProps): JSX.Element {
  return (
    <HeaderContent>
      {children}
    </HeaderContent>
  )
}

export default Header

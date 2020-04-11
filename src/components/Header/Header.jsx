import React from 'react'
import PropTypes from 'prop-types'

function Header({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}

Header.defaultProps = {
  children: null,
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header

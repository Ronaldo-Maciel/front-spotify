import React from 'react'
import Global from './global'
import Reset from './reset'

function Theme(): JSX.Element {
  return (
    <>
      <Reset />
      <Global />
    </>
  )
}

export default Theme

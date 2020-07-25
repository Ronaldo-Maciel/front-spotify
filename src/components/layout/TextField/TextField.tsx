import React from 'react'
import Text from '../Text'
import Props from './types'
import TextFieldStyle from './style'
import colors from '../Theme/colors'

function TextField({
  type,
  placeholder,
  label,
  id,
  handleChange,
}: Props): JSX.Element {
  return (
    <>
      <Text as="label" variant="subtitle" textColor={colors.light} htmlFor={id}>{label}</Text>
      <TextFieldStyle
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  )
}

export default TextField

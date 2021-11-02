import React from "react"
import styled from 'styled-components'

const CheckBox = ({id, name}) => {
  // Create a custom checkbox component
  
  // As there are going to be three different parts that are going to use checkbox, please be careful how are you going to write a code!

  return (
    <CheckboxCont>

      <CheckBoxElement>
        <input type="checkbox" id={id} name={name} />
        <CheckBoxLabel htmlFor={name}>{name}</CheckBoxLabel>
      </CheckBoxElement>
      
    </CheckboxCont>
  )
}


export default CheckBox

const CheckboxCont = styled.div`
  position: relative;
`

const CheckBoxElement = styled.div`
  padding: 7px 0;
  font-weight: 200;
  display: flex;
  align-items: flex-end;
`

const CheckBoxLabel = styled.label`
  padding-left: 10px;
  font-size: .9rem;
`
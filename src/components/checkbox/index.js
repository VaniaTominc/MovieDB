import React from "react"
import { CheckboxCont, 
  CheckBoxElement,
  CheckBoxLabel 
} from "./style.js"

const CheckBox = ({id, name}) => {
  
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


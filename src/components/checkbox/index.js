import React from "react"
import styled from 'styled-components'

const CheckBox = () => {
  // Create a custom checkbox component
  
  // For now hard coded, later use API call to create all genres by mapping through the result.
  // As there are going to be three different parts that are going to use checkbox, please be careful how are you going to write a code!

  return (
    <CheckboxCont>

      <CheckBoxElement>
        <input type="checkbox" id="action" name="action" />
        <CheckBoxLabel for="action">Action</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="adventure" name="adventure" />
        <CheckBoxLabel for="adventure">Adventure</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="animation" name="animation" />
        <CheckBoxLabel for="animation">Animation</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="comedy" name="comedy" />
        <CheckBoxLabel for="comedy">Comedy</CheckBoxLabel>
      </CheckBoxElement>
      
      <CheckBoxElement>
        <input type="checkbox" id="crime" name="crime" />
        <CheckBoxLabel for="crime">Crime film</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="documentary" name="documentary" />
        <CheckBoxLabel for="documentary">Documentary</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="drama" name="drama" />
        <CheckBoxLabel for="drama">Drama</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="erotic" name="erotic" />
        <CheckBoxLabel for="erotic">Erotic</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="family" name="family" />
        <CheckBoxLabel for="family">Family</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="Fantasy" name="fantasy" />
        <CheckBoxLabel for="fantasy">Fantasy</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="history" name="history" />
        <CheckBoxLabel for="history">History</CheckBoxLabel>
      </CheckBoxElement>

      <CheckBoxElement>
        <input type="checkbox" id="horror" name="horror" />
        <CheckBoxLabel for="horror">Horror</CheckBoxLabel>
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
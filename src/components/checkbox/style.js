import styled from "styled-components"

export const CheckboxCont = styled.div`
  position: relative;
`

export const CheckBoxElement = styled.div`
  padding: 7px 0;
  font-weight: 200;
  display: flex;
  align-items: flex-end;
`

export const CheckBoxLabel = styled.label`
  padding-left: 10px;
  font-size: .9rem;
  
  @media (max-width: 428px) {
    font-size: .7rem;
  }
`
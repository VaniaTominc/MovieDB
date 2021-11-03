import styled, { css } from "styled-components"
import * as colors from "../../colors"

export const InputText = styled.div`
  border-bottom: 1px solid ${colors.primaryColor};
  display: flex;
  align-items: flex-end;
  padding-bottom: 7px;
  
  @media (max-width: 990px) {
    margin-top: -1rem;
  }
`

export const LensIcon = css`
  padding: 0 8px 2px 0;
  width: 23px;
`

export const Text = css`
  border-color: transparent;
  outline: none;
  transition: 0.15s;
  font-size: 1rem;
  color: ${colors.primaryColor};
  font-weight: 100;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.primaryColor};
    opacity: .7;
  }
  :-ms-input-placeholder {
    color: ${colors.primaryColor};
    opacity: .7;
  }
  margin-top: 10px;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  } 
`
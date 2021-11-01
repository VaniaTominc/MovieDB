import React from "react"
import styled from 'styled-components'

import * as colors from "../../colors"
import SearchIcon from "../../images/search-icon-yellow.png"
import CalendarIcon from "../../images/year-icon.png"

const SearchBar = () => {

  return (
    <>
      <InputText>
        <LensIcon src={SearchIcon} alt="Search icon" />
        <Input type="text" placeholder="Search for movies" />
      </InputText>
      <InputText className="positioning-lower-input">
        <LensIcon src={CalendarIcon} alt="Year of production" />
        <Input type="number" min="1900" max="2099" step="1" placeholder="Search for movies" style={{width: '100%'}} />
      </InputText>
    </>
  )
}

export default SearchBar

const InputText = styled.div`
  border-bottom: 2px solid ${colors.primaryColor};
  display: flex;
  align-items: flex-end;
  padding-bottom: 7px;
`

const LensIcon = styled.img`
  padding: 0 8px 2px 0;
  width: 23px;
`

const Input = styled.input`
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
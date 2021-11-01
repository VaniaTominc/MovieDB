import React from "react"
import styled from 'styled-components'

import * as colors from "../../colors"
import SearchIcon from "../../images/search-icon-yellow.png"
// import CalendarIcon from "../../images/year-icon.png"

const SearchBar = () => {

  return (
    <>
      <InputText>
        <LensIcon src={SearchIcon} alt="Search icon" />
        <Input />
      </InputText>
    </>
  )
}

export default SearchBar

const InputText = styled.div`
  border-bottom: 2px solid ${colors.primaryColor};
  display: flex;
  align-items: center;
  padding-bottom: 7px;
`

const LensIcon = styled.img`
  padding-right: 5px;
  width: 23px;
`

const Input = styled.input.attrs({ 
  type: 'text',
  placeholder: 'Search for movie'
  })`
  border-color: transparent;
  outline: none;
  transition: 0.15s;
  font-size: 1rem;
  color: ${colors.primaryColor};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.primaryColor};
    opacity: .7;
  }
  :-ms-input-placeholder {
    color: ${colors.primaryColor};
    opacity: .7;
  }
`
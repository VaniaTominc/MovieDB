import React, { useEffect, useState } from "react"
import styled from 'styled-components'

import * as colors from "../../colors"
import SearchIcon from "../../images/search-icon-yellow.png"
import CalendarIcon from "../../images/year-icon.png"

const SearchBar = (props) => {

  // console.log('props >>>>', props.searchMovies())

  const [searchTerm, setSearchTerm] = useState('')        // Had to add '', because I got an error of "uncontrolled >>> controlled component" inside console.log
  const [searchYear, setSearchYear] = useState('')        // Look at the line 12 for the explanation.
  const handleChange = event => {
    setSearchTerm(event.target.value)
    // props.searchMovies(searchTerm)
  }

  const handleYear = event => {
    setSearchYear(event.target.value)
    // console.log('event.target.value >>>', event.target.value)
    // props.searchMovies(searchYear)
  }

  useEffect(() => {
    props.searchMovies(searchTerm, searchYear)
  }, [props, searchTerm, searchYear])


  return (
    <>
      <InputText>
        <LensIcon src={SearchIcon} alt="Search icon" />
        <Input type="text" placeholder="Search for movies" value={searchTerm} onChange={handleChange} />
      </InputText>
      <InputText id="search-year" className="positioning-lower-input">
        <LensIcon src={CalendarIcon} alt="Year of production" />
        <Input type="number" min="1900" max="2099" value={searchYear} onChange={handleYear} placeholder="Year of release" style={{width: '100%'}} />
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
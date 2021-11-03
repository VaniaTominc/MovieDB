import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { InputText, LensIcon, Text } from "./style.js"
import SearchIcon from "../../images/search-icon-yellow.png"
import CalendarIcon from "../../images/year-icon.png"

const Icon = styled.img`${LensIcon}`
const Input = styled.input`${Text}`

const SearchBar = (props) => {

  const [searchTerm, setSearchTerm] = useState("")        
  const [searchYear, setSearchYear] = useState("") 
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleYear = event => {
    setSearchYear(event.target.value)
  }

  useEffect(() => {
    props.searchMovies(searchTerm, searchYear)
  }, [props, searchTerm, searchYear])


  return (
    <>
      <InputText>
        <Icon src={SearchIcon} alt="Search icon" />
        <Input type="text" placeholder="Search for movies" value={searchTerm} onChange={handleChange} />
      </InputText>
      <InputText id="search-year" className="positioning-lower-input">
        <Icon src={CalendarIcon} alt="Year of production" />
        <Input type="number" min="1900" max="2099" value={searchYear} onChange={handleYear} placeholder="Year of release" style={{width: "100%"}} />
      </InputText>
    </>
  )
}

export default SearchBar
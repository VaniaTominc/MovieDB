/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import styled, { css } from 'styled-components'

// import * as colors from "../../colors"
import ExpandableFilter from "../../components/expandablefilter"
import SearchBar from "../../components/searchbar"

import FilterImage from "../../images/filter-icon.png"

const SearchFilters = ({languages, ratings, genres, searchMovies}) => {

  // const [sendValue, setSendValue] = useState('')
  const [status, setStatus] = useState(true)

  const handleClick = () => {
    // console.log('EVENT.TARGET >>>', event.target.name)
    setStatus(!status)
    // console.log('Current Status >>>', status)
  }

  return (
    <Fragment>
      {/* <h1>SearchFilters Component</h1> */}
      <FiltersWrapper>

        {/* On the right side of page is the SearchBar component */}
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
          <SearchBar searchMovies={searchMovies} />
        </SearchFiltersCont>

        {/* On the right side of page, under the SearchBar component */}
        <SearchFiltersCont>
          <input type="image" src={FilterImage} alt="Filter icon" name="filterIcon" onClick={handleClick} />
          {/* <FilterIcon src={FilterImage} alt="Filter icon" onClick={handleClick} /> */}
          <CategoryTitle>Movie</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          <ExpandableFilter 
            genres={genres}
            languages={languages}
            ratings={ratings}
            status={status}
          />
        </SearchFiltersCont>

      </FiltersWrapper>
    </Fragment>
  )
}

export default SearchFilters

// Originally it had only "position:relative", I added the rest.
// In media query I had to use flex to reposition elements.
const FiltersWrapper = styled.div`
  position: relative;
  padding-top: 36px;

  @media (max-width: 990px) {
    display: flex;
    padding-top: 30px;
    margin-left: -15px;
    justify-content: space-between;
  }
`

// I added media query and used same logic as with "props => props.marginBottom ..."
const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 12px 20px 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}

  @media (max-width: 990px) {
    background-color: transparent;
    ${props => props.marginBottom && css`
    margin-right: 15px;
    background-color: transparent;
  `}
  }
`

const CategoryTitle = styled.div`
  font-size: .9rem;
  font-weight: 800;
`


const FilterIcon = styled.img`
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`
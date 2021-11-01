import React from "react"
import { Fragment } from "react/cjs/react.production.min"
import styled, { css } from 'styled-components'

// import * as colors from "../../colors"
import ExpandableFilter from "../../components/expandablefilter"
import SearchBar from "../../components/searchbar"

const SearchFilters = () => {

  // const { genres, ratings, languages, searchMovies } = this.props;

  return (
    <Fragment>
      {/* <h1>SearchFilters Component</h1> */}
      <FiltersWrapper>

        {/* On the right side of page is the SearchBar component */}
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
          <SearchBar />
        </SearchFiltersCont>

        {/* On the right side of page, under the SearchBar component */}
        <SearchFiltersCont>
          <CategoryTitle>Movies</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          <ExpandableFilter />
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

  @media (max-width: 768px) {
    display: flex;
    padding-top: 30px;
    margin-left: -15px;
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

  @media (max-width: 768px) {
    ${props => props.marginBottom && css`
    margin-right: 15px;
  `}
  }
`

const CategoryTitle = styled.div`

`
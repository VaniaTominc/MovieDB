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
      <h1>SearchFilters Component</h1>
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
          <SearchBar />
        </SearchFiltersCont>
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

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
`

const CategoryTitle = styled.div`

`
import React, { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import styled from "styled-components"
import ExpandableFilter from "../../components/expandablefilter"
import SearchBar from "../../components/searchbar"
import FilterImage from "../../images/filter-icon.png"
import { FiltersWrapper, 
  CategoryTitle, 
  FilterIcon, 
  SearchFiltersCont 
} from "./style.js"

const Icon = styled.input`${FilterIcon}`


const SearchFilters = ({languages, ratings, genres, searchMovies}) => {

  const [status, setStatus] = useState(false)

  const handleClick = () => {
    setStatus(!status)
  }

  return (
    <Fragment>
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          <SearchBar searchMovies={searchMovies} />
        </SearchFiltersCont>
        <SearchFiltersCont>
          <Icon type="image" src={FilterImage} alt="Filter icon" name="filterIcon" onClick={handleClick} />
          <CategoryTitle>Movie</CategoryTitle>
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


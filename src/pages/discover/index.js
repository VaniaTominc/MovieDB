/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import styled from 'styled-components'

// import * as colors from "../../colors"
import * as fetcher from "../../fetcher"

import SearchFilters from "../../components/searchfilter"
import MovieList from "../../components/movielist"

const Discover = () => {

  // ! Original code, please change it to hooks.

  const [popular, setPopular] = useState([])
  const [genreOptions, setGenresOptions] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const genresData = await fetcher.genresData()
        const popularData = await fetcher.popularMoviesData()
        setGenresOptions(genreOptions)
      } catch(err) {
        console.log('I am causing problems inside Discover component >>>', err.message)
      }
    }
    getData()
  })


  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     keyword: '',
  //     year: 0,
  //     results: [],
  //     totalCount: 0,
  //     genreOptions: [],
  //     ratingOptions: [
  //     { id: 7.5, name: 7.5 },
  //     { id: 8, name: 8 },
  //     { id: 8.5, name: 8.5 },
  //     { id: 9, name: 9 },
  //     { id: 9.5, name: 9.5 },
  //     { id: 10, name: 10 }
  //     ],
  //     languageOptions: [
  //       { id: 'GR', name: 'Greek' },
  //       { id: 'EN', name: 'English' },
  //       { id: 'RU', name: 'Russian' },
  //       { id: 'PO', name: 'Polish' }
  //     ]
  //   }
  // }

  const ratingOptions = [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 }
  ]

  const languageOptions = [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' }
  ]

  // ! Write a function to preload the popular movies when page loads & get the movie genres

  // ! Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on small screens & mobile devices*/}
      <MovieFilters>
        <SearchFilters 
          // genres={genreOptions} 
          ratings={ratingOptions}  
          languages={languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        {/* { totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>} */}
        <TotalCounter>1054 movies</TotalCounter>
        <MovieList 
          // movies={results || []}
          // genres={genreOptions || []}
        />
      </MovieResults>
    </DiscoverWrapper>
  )

}

export default Discover


// Originally it had only "padding: 60px 35px", I added the rest.
// In media query I had to reposition elements once again by using different flex options.
const DiscoverWrapper = styled.main`
  padding: 47px 50px;
  display: flex;
  flex-direction: row-reverse;
`

// Originally it had only "font-weight: 900", I added the rest.
const TotalCounter = styled.div`
  font-weight: 200;
  padding-bottom: 20px;
  font-size: .8rem;
`

const MovieResults = styled.div`
  flex: 8;
`

// Originally empty, I added styles.
const MovieFilters = styled.div`
  flex: 2;
  padding-left: 15px;
`

const MobilePageTitle = styled.header`
  display: none;

  @media (max-width: 768px) {
    display: block;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 60px;
    font-size: 1.6rem;
    margin-top: -5px 
  }
`
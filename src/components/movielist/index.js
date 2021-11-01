import React from "react"
import styled from 'styled-components'

import MovieItem from '../movieitem'

const MovieList = ({movies}) => {

  // console.log('Incoming movies inside MovieList component >>>>', movies)

  // const { movies, genres } = this.props

  return (
    <MoviesWrapper>
        {/* Finish the MovieItem component and use it here to display the movie results */}
        {/* <h1>MovieList component</h1> */}
        {movies && movies.map(item => {
          return <MovieItem key={item.id} { ...item} />
        })}
    </MoviesWrapper>
  )
}

export default MovieList

const MoviesWrapper = styled.div`
  position: relative;
`
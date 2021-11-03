import React from "react"
import styled from 'styled-components'

import MovieItem from '../movieitem'

const MovieList = ({popular, movies}) => {

  // console.log('Incoming movies inside MovieList component >>>>', movies)
  // console.log('Incoming genres in MovieList >>>>', genres)

  // const { movies, genres } = this.props

  return (
    <MoviesWrapper>
        {/* Finish the MovieItem component and use it here to display the movie results */}
        {/* <h1>MovieList component</h1> */}
        {/* {movies && movies.map(item => {
          return <MovieItem key={item.id} { ...item} />
        })} */}
        {popular ? 
        
          <>
            {popular && popular.map(item => {
              return <MovieItem key={item.id} { ...item} />
            })}
          </>

          : 
        
          <>
            {movies && movies.map(item => {
              return <MovieItem key={item.id} { ...item} />
            })}
          </>
        }
        
        {/* <MovieItem 
          movies={movies}
          genres={genres}
          popular={popular} 
        /> */}
    </MoviesWrapper>
  )
}

export default MovieList

const MoviesWrapper = styled.div`
  position: relative;
`
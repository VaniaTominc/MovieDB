import React from "react"
import { MoviesWrapper, NoResult } from "./style.js"
import MovieItem from "../movieitem"

const MovieList = ({movies}) => {

  console.log('popular >>>>', movies)

  return (
    <MoviesWrapper>

      {movies && movies.length > 1 ?
      
        <>
          {movies && movies.map(item => {
            return <MovieItem key={item.id} { ...item} />
          })}
        </>

        :

        <NoResult>No results found.</NoResult>
    
      }
        
    </MoviesWrapper>
  )
}

export default MovieList

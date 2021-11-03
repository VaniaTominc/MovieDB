import React from "react"
import { MoviesWrapper } from "./style.js"
import MovieItem from "../movieitem"

const MovieList = ({popular, movies}) => {

  return (
    <MoviesWrapper>
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
        
    </MoviesWrapper>
  )
}

export default MovieList

import React, { useEffect, useState } from "react"
import styled from "styled-components"
import * as fetcher from "../../fetcher"
import { MovieItemWrapper, 
  LeftCont, 
  RightCont, 
  StyledImage, 
  HeadingRating, 
  Heading, 
  Rating, 
  OverviewWrapper, 
  OverviewContent, 
  ReleaseContent, 
  Genre 
} from "./style.js"

const Image = styled.img`${StyledImage}`


const MovieItem = ({poster_path, original_title, overview, release_date, vote_average, id}) => {

  const [getGenre, setGetGenre] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const genreData = await fetcher.moviesGenresData(id)
        setGetGenre(genreData.genres)
      } catch(err) {
        console.log("Error inside MovieItem >>>>", err.message)
      }
    }
    getData()
  }, [id])

  const checkImage = () => {
    if (poster_path === null) {
      return "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"         // I had to use this as some queries are not returning picture back.
    } else {
      return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
  }

  return (

      <MovieItemWrapper> 
        <LeftCont>
          <Image src={checkImage()} alt={original_title} />       
        </LeftCont>
        <RightCont>
          <HeadingRating>
            <Heading>{original_title}</Heading>
            <Rating>{vote_average}</Rating>
          </HeadingRating>
          <Genre>{getGenre && getGenre.map((item, index) => {
            return (
              <span key={item.id}>{(index ? " | " : "") + item.name}</span>
            )
          })}</Genre>
          <OverviewWrapper> 
            <div className="sidebar-box">
              <OverviewContent>
                {overview}
              </OverviewContent>
            </div>
            <ReleaseContent>{release_date}</ReleaseContent>
          </OverviewWrapper>
        </RightCont>
      </MovieItemWrapper>
  )
}

export default MovieItem




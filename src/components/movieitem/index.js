import React, { useEffect, useState } from "react"
import styled from 'styled-components'

import * as colors from "../../colors"
import * as fetcher from "../../fetcher"

const MovieItem = ({poster_path, original_title, overview, release_date, vote_average, id}) => {

  const [getGenre, setGetGenre] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const genreData = await fetcher.moviesGenresData(id)
        setGetGenre(genreData.genres)
      } catch(err) {
        console.log('Error inside MovieItem >>>>', err.message)
      }
    }
    getData()
  }, [id])

  const checkImage = () => {
    if (poster_path === null) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'         // I had to use this as some queries are not returning picture back.
    } else {
      return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
  }

  return (

      <MovieItemWrapper> 
        <LeftCont>
          <StyledImage src={checkImage()} alt={original_title} />       
        </LeftCont>
        <RightCont>
          <HeadingRating>
            <Heading>{original_title}</Heading>
            <Rating>{vote_average}</Rating>
          </HeadingRating>
          <Genre>{getGenre && getGenre.map((item, index) => {
            return (
              <span key={item.id}>{(index ? ' | ' : '') + item.name}</span>
            )
          })}</Genre>
          <OverviewWrapper> 
            <div className='sidebar-box'>
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

// Added display: flex;
const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;    
  margin-bottom: 15px;                    
`

const LeftCont = styled.div`
  display: inline-block;
`

// I added "flex: 1" to spread the container to its fullness. I also changed display from inline-block to flex as I was having some problems with positioning release date.
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

// Created new styled component for the image
const StyledImage = styled.img`
  width: 130px;
  height: 200px;
  object-fit: cover;
  padding: 20px;

  @media (max-width: 428px) {
    width: 85px;
    height: 140px;
    padding: 15px;
  }
`

const HeadingRating = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  align-item: flex-end;
  align-items: center;

  @media (max-width: 428px) {
    padding-right: 12.5px;
  }
`

const Heading = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 428px) {
    font-size: 1.02rem;
  }
`


const Rating = styled.div`
  width: 19px;
  height: 14px;
  border: 1px solid ${colors.primaryColor};
  border-radius: 5px;
  background-color: ${colors.primaryColor};
  color: white;
  padding: 4px;
  font-size: .8rem;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 428px) {
    margin-top: 5px;
    font-size: .75rem;
    padding: 3px 1.5px;
  }
`

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

const OverviewContent = styled.p`
  padding-right: 20px;
  line-height: 1.3;
  font-size: .9rem;

  @media (max-width: 428px) {
    padding-right: 5px;
    font-size: .8rem;
  }
`
const ReleaseContent = styled.p`
  line-height: 0;
  font-size: .75rem;
  color: ${colors.primaryColor};
  margin-bottom: 30px;
  opacity: .5;

  @media (max-width: 428px) {
    font-size: .6rem;
    margin-bottom: 22px;
  }
`

const Genre = styled.h4`
  color: ${colors.primaryColor};
  font-size: .75rem;
  margin-top: -.75rem;

  @media (max-width: 428px) {
    margin-top: -.3rem;
    font-weight: 400;
    font-size: .65rem;
  }
`